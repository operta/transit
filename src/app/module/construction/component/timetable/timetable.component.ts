import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Shift} from '../../model/shift';
import {Activity} from '../../model/activity';
import * as moment from 'moment';
import {ConstructionService} from '../../construction.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';
import {TunnelRound} from '../../model/tunnel-round';

@Component({
    selector: 'app-timetable',
    templateUrl: './timetable.component.html',
    styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {
    @Input() activities: Activity[];
    @Input() shift: Shift;
    @Input() round: TunnelRound;
    @Output() activityDeleted = new EventEmitter<void>();
    slots: any[];
    hourSlots: any[] = [];

    constructor(private constructionService: ConstructionService,
                private snackBar: MatSnackBar,
                private translateService: TranslateService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.slots = this.generateSlots(this.shift.startDateTime.hour(), this.shift.endDateTime.hour(), 4);
    }

    private generateSlots(shiftStartHour: any, shiftEndHour: any, slotsPerHour: number): any[] {
        const slots = [];
        let x = shiftStartHour;
        while (x !== shiftEndHour) {
            this.hourSlots.push(x);
            for (let position = 0; position < slotsPerHour; position++) {
                const minuteSpan = 60 / slotsPerHour * position;
                const dateTime = moment(this.shift.startDateTime);
                dateTime.set('hour', x);
                dateTime.set('minute', minuteSpan);
                slots.push({
                    hourDisplay: this.timeToString(x),
                    dateTime: dateTime
                });
            }
            x++;
            if (x === 24) {
                x = 0;
            }
        }
        return slots;
    }

    isActivityInSlot(activity: Activity, slotDateTime: moment.Moment): boolean {
        return slotDateTime.isBetween(activity.startDateTime, activity.endDateTime, null, '[)');
    }

    timeToString(x: number): string {
        if (x.toString().length === 1) {
            return '0' + x.toString();
        } else {
            return x.toString();
        }
    }

    deleteActivity(id: number): void {
        this.constructionService.deleteActivity(id)
            .subscribe(res => {
                this.activityDeleted.emit();
                const activityDeletedMessage = this.translateService.instant('activityDeleted');
                const closeMessage = this.translateService.instant('close');
                this.snackBar.open(activityDeletedMessage, closeMessage);
            });
    }

    editActivity(id: number): void {
        this.router.navigateByUrl('/construction/add-activity-form/round/' + this.round.id + '/shift/' + this.shift.id + '/activity/' + id);
    }

}
