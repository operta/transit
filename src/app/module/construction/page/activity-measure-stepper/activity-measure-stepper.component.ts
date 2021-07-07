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

@Component({
    selector: 'app-activity-measure-stepper',
    templateUrl: './activity-measure-stepper.component.html',
    styleUrls: ['./activity-measure-stepper.component.css']
})
export class ActivityMeasureStepperComponent implements OnInit {
    shiftId: number;
    roundId: number;
    stepperFormGroup: FormGroup;
    shift: Shift;
    round: TunnelRound;
    activities: Activity[];

    constructor(private route: ActivatedRoute,
                private constructionService: ConstructionService,
                private location: Location,
                private snackBar: MatSnackBar) {
        this.route.params.subscribe(params => {
            this.shiftId = +params.shiftId;
            this.roundId = +params.roundId;
            this.constructionService.getShift(this.shiftId).subscribe(res => this.shift = res);
            this.constructionService.getActivities(this.shiftId, this.roundId).subscribe(res => this.activities = res);
            this.constructionService.getTunnelRound(this.roundId).subscribe((res: TunnelRound) => this.round = res);
        });
    }

    ngOnInit(): void {
        this.stepperFormGroup = new FormGroup({
            activity: new FormGroup({}),
            measures: new FormArray([])
        });
    }

    createActivityAndMeasures(): void {
        const activityValues = this.stepperFormGroup.get('activity').value;
        const newActivity = new Activity(
            activityValues.round,
            activityValues.shift,
            activityValues.type,
            this.updateStartTime(activityValues.activityStartTime, activityValues.startDateTime),
            this.updateEndTime(activityValues.duration, this.updateStartTime(activityValues.activityStartTime, activityValues.startDateTime))
        );
        this.constructionService.createActivity(newActivity)
            .subscribe((activityId: number) => {
                this.createMeasures(activityId).subscribe((res) => {
                }, () => {
                }, () => {
                    this.snackBar.open('Activity saved', 'Close');
                    this.finish();
                });
            });
    }

    private createMeasures(activityId: number): Observable<any[]> {
        let measures: any[] = this.stepperFormGroup.get('measures').value;
        measures = measures
            .map(measure => this.createMeasure(measure, activityId))
            .map(measure => this.constructionService.createMeasure(measure));
        return forkJoin(measures);
    }

    private createMeasure(formValues: any, activityId: number): Measure {
        return new Measure(
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

    finish(): void {
        this.location.back();
    }

}
