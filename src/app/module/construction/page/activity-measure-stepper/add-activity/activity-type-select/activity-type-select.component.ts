import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivityType} from '../../../../model/activity-type';
import {ConstructionService} from '../../../../construction.service';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-activity-type-select',
    templateUrl: './activity-type-select.component.html',
    styleUrls: ['./activity-type-select.component.css']
})
export class ActivityTypeSelectComponent implements OnInit {
    @Input() formGroup: FormGroup;
    @Output() activityTypeSelected = new EventEmitter<number>();
    types$: Observable<ActivityType[]>;

    constructor(private constructionService: ConstructionService) {
    }

    ngOnInit(): void {
        this.types$ = this.constructionService.getActivityTypes();
    }

    onSelectType(event): void {
        this.activityTypeSelected.emit(+event.value);
    }

}
