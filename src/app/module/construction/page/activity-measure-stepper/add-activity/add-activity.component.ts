import {Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, Inject} from '@angular/core';
import {Activity} from '../../../model/activity';
import {Shift} from '../../../model/shift';
import * as moment from 'moment';
import {ConstructionService} from '../../../construction.service';
import {TunnelRound} from '../../../model/tunnel-round';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-add-activity',
    templateUrl: './add-activity.component.html',
    styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent implements OnInit, OnChanges {
    @Input() parentForm: FormGroup;
    @Input() shift: Shift;
    @Input() round: TunnelRound;
    @Input() activities: Activity[];
    activityFormGroup: FormGroup;
    minTime: string;
    maxTime: string;


    constructor(private constructionService: ConstructionService,
                private formBuilder: FormBuilder
    ) {}

    ngOnInit(): void {
        if (this.parentForm && this.shift && this.round) {
            this.initializeMinAndMaxTime();
            this.initializeForm();
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.parentForm && this.shift && this.round) {
            this.initializeForm();
        }
    }

    private initializeMinAndMaxTime(): void {
        this.minTime = this.shift.startDateTime.hour().toString() + ':' + this.shift.startDateTime.minute().toString();
        this.maxTime = this.shift.endDateTime.hour().toString() + ':' + this.shift.endDateTime.minute().toString();
    }

    private initializeForm(): void {
        const startDateTime = this.initializeStartDateTime();
        const startTime: string = startDateTime.hour().toString() + ':' + startDateTime.minute().toString();
        this.activityFormGroup = this.formBuilder.group({
            type: ['', Validators.required],
            startDateTime: [startDateTime, Validators.required],
            activityStartTime: [startTime, Validators.required],
            duration: [15, Validators.required],
            shift: [this.shift.id, Validators.required],
            round: [this.round.id, Validators.required],
            comment: ['']
        });
        this.parentForm.setControl('activity', this.activityFormGroup);
    }

    private initializeStartDateTime(): moment.Moment {
        if (this.activities && this.activities.length > 0) {
            const activities =  Object.assign([], this.activities);
            const sortedActivities = activities.sort((a, b) => moment(a.startDateTime).diff(b.startDateTime));
            const lastActivity = sortedActivities.pop();
            return lastActivity.endDateTime;
        }
        return this.shift.startDateTime;
    }

    subtractDuration(): void {
        const duration: number = this.activityFormGroup.get('duration').value;
        if (duration > 15) {
            this.activityFormGroup.get('duration').setValue(duration - 15);
        }
    }

    addDuration(): void {
        const duration: number = this.activityFormGroup.get('duration').value;
        this.activityFormGroup.get('duration').setValue(duration + 15);
    }

}
