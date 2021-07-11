import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {Activity} from '../../../model/activity';
import {Shift} from '../../../model/shift';
import * as moment from 'moment';
import {ConstructionService} from '../../../construction.service';
import {TunnelRound} from '../../../model/tunnel-round';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-add-edit-activity',
    templateUrl: './add-edit-activity.component.html',
    styleUrls: ['./add-edit-activity.component.css']
})
export class AddEditActivityComponent implements OnInit, OnChanges {
    @Input() parentForm: FormGroup;
    @Input() shift: Shift;
    @Input() round: TunnelRound;
    @Input() activities: Activity[];
    @Input() editActivity: Activity = new Activity();
    activityFormGroup: FormGroup;
    minTime: string;
    maxTime: string;

    constructor(private constructionService: ConstructionService,
                private formBuilder: FormBuilder
    ) {
    }

    ngOnInit(): void {
        this.initializeMinAndMaxTime();
        this.initializeForm();
        if (this.editActivity) {
            this.editForm(this.editActivity);
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.initializeMinAndMaxTime();
        this.initializeForm();
        if (this.editActivity) {
            this.editForm(this.editActivity);
        }
    }

    private initializeMinAndMaxTime(): void {
        this.minTime = this.shift.startDateTime.hour().toString() + ':' + this.shift.startDateTime.minute().toString();
        this.maxTime = this.shift.endDateTime.hour().toString() + ':' + this.shift.endDateTime.minute().toString();
        if (this.maxTime === '0:0') {
            this.maxTime = '23:59';
        }
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

    private editForm(activity: Activity): void {
        const startTime: string = activity.startDateTime.hour().toString() + ':' + activity.startDateTime.minute().toString();
        this.activityFormGroup = this.formBuilder.group({
            type: [activity.type, Validators.required],
            startDateTime: [activity.startDateTime, Validators.required],
            activityStartTime: [startTime, Validators.required],
            duration: [moment.duration(activity.endDateTime.diff(activity.startDateTime)).asMinutes(), Validators.required],
            shift: [activity.shift, Validators.required],
            round: [activity.round, Validators.required],
            comment: [activity.comment]
        });
        this.parentForm.setControl('activity', this.activityFormGroup);
    }

    private initializeStartDateTime(): moment.Moment {
        if (this.activities && this.activities.length > 0) {
            const activities = Object.assign([], this.activities);
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
