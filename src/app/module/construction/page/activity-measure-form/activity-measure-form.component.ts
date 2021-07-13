import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {FormArray, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {TunnelRound} from '../../model/tunnel-round';
import {ConstructionService} from '../../construction.service';
import {Shift} from '../../model/shift';
import {Activity} from '../../model/activity';
import * as moment from 'moment';
import {forkJoin, Observable} from 'rxjs';
import {Measure} from '../../model/measure';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-activity-measure-form',
    templateUrl: './activity-measure-form.component.html',
    styleUrls: ['./activity-measure-form.component.css']
})
export class ActivityMeasureFormComponent implements OnInit {
    title: string;
    activityId: number;
    shiftId: number;
    roundId: number;
    stepperFormGroup: FormGroup;
    shift: Shift;
    round: TunnelRound;
    activities: Activity[];

    editActivity: Activity;
    editMeasures: Measure[] = [];

    constructor(private route: ActivatedRoute,
                private constructionService: ConstructionService,
                private location: Location,
                private snackBar: MatSnackBar,
                private translateService: TranslateService) {
    }

    ngOnInit(): void {
        this.title = this.route.snapshot.data.title;
        this.route.params.subscribe(params => {
            this.shiftId = +params.shiftId;
            this.roundId = +params.roundId;
            this.activityId = +params.activityId;
        });
        this.stepperFormGroup = new FormGroup({
            activity: new FormGroup({}),
            measures: new FormArray([])
        });
        this.constructionService.getShift(this.shiftId).subscribe(res => this.shift = res);
        this.constructionService.getTunnelRound(this.roundId).subscribe((res: TunnelRound) => this.round = res);
        this.constructionService.getActivities(this.shiftId, this.roundId).subscribe(res => {
            this.activities = res;
            if (this.activityId) {
                this.editActivity = this.activities.find(a => a.id === this.activityId);
                this.constructionService.getMeasuresByActivity(this.editActivity.id)
                    .subscribe((measures: Measure[]) => {
                        this.editMeasures = measures;
                    });
            }
        });
    }

    createOrEditActivityAndMeasures(): void {
        const activityValues = this.stepperFormGroup.get('activity').value;
        const activity = new Activity(
            activityValues.round,
            activityValues.shift,
            activityValues.type,
            this.updateStartTime(activityValues.activityStartTime, activityValues.startDateTime),
            this.updateEndTime(activityValues.duration, this.updateStartTime(activityValues.activityStartTime, activityValues.startDateTime)),
            activityValues.comment,
            []
        );
        if (this.editActivity) {
            activity.id = this.editActivity.id;
            this.constructionService.editActivity(activity).subscribe((res) => {
                this.createOrDeleteMeasures(this.editActivity.id).subscribe(
                    (res) => {
                        console.log('creating and delting measures')
                        console.log(res);
                    }, () => {
                    }, () => {
                        const activityEditedMessage = this.translateService.instant('activityEdited');
                        const closedMessage = this.translateService.instant('close');
                        this.snackBar.open(activityEditedMessage, closedMessage);
                        this.finish();
                    }
                );
            });
        } else {
            this.constructionService.createActivity(activity)
                .subscribe((activityId: number) => {
                    this.createOrDeleteMeasures(activityId).subscribe((res) => {
                    }, () => {
                    }, () => {
                        const activitySavedMessage = this.translateService.instant('activitySaved');
                        const closedMessage = this.translateService.instant('close');
                        this.snackBar.open(activitySavedMessage, closedMessage);
                        this.finish();
                    });
                });
        }
    }

    finish(): void {
        this.location.back();
    }

    private createOrDeleteMeasures(activityId: number): Observable<any[]> {
        const oldMeasures = this.editMeasures;
        const alteredMeasures: Measure[] = this.stepperFormGroup.get('measures').value.map(m => this.createMeasure(m, activityId));
        const measuresToAdd = alteredMeasures.filter(m => m.id === null);
        const measuresToDelete = oldMeasures.filter(em => !alteredMeasures.map(am => am.id).includes(em.id));

        const measureAddRequests = measuresToAdd
            .map(measure => this.constructionService.createMeasure(measure));

        const measureDeleteRequests = measuresToDelete
            .map(m => m.id)
            .map(id => this.constructionService.deleteMeasure(id));

        return forkJoin(measureAddRequests.concat(measureDeleteRequests));
    }

    private createMeasure(formValues: any, activityId: number): Measure {
        return new Measure(
            null,
            null,
            null,
            formValues.quantity,
            formValues.round,
            activityId,
            formValues.measureDefinition
        );
    }

    private updateStartTime(hourMinute: string, startDateTime: moment.Moment): moment.Moment {
        const hour = +hourMinute.split(':')[0];
        const minute = +hourMinute.split(':')[1];
        const date = moment(startDateTime);
        date.set('hour', hour);
        date.set('minute', minute);
        return date;
    }

    private updateEndTime(duration: number, startDateTime: moment.Moment): moment.Moment {
        return moment(startDateTime).add(duration, 'minutes');
    }
}
