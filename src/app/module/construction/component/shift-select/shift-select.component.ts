import {Component, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import * as moment from 'moment';
import {ConstructionService} from '../../construction.service';
import {Shift} from '../../model/shift';
import {Observable, of} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-shift-select',
    templateUrl: './shift-select.component.html',
    styleUrls: ['./shift-select.component.css']
})
export class ShiftSelectComponent implements OnChanges {
    @Input() sectionId: number;
    @Output() shiftSelected = new EventEmitter<any>();
    openShifts$: Observable<Shift[]>;

    constructor(private constructionService: ConstructionService,
                private snackBar: MatSnackBar,
                private translateService: TranslateService) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.initializeShifts();
    }

    // Function that retrieves shifts that are not finished and creates a new one depending on current date time
    // we check if the current date time is after the shift end date time (with an additional 15 minutes window)
    private initializeShifts(): void {
        this.constructionService.getOpenShifts(this.sectionId)
            .subscribe(res => {
                const openShifts = res;
                this.openShifts$ = of(openShifts);
                if (openShifts.every(i => i.endDateTime.isBefore(moment().add(15, 'minute')))) {
                    this.createNewShift();
                }
            });
    }

    private loadOpenShifts(): void {
        this.openShifts$ = this.constructionService.getOpenShifts(this.sectionId);
    }

    // Function to create new shift based on current time
    private createNewShift(): void {
        const currentDateTime = moment().add(15, 'minute');
        const newShift = new Shift(this.sectionId);
        if (currentDateTime.hour() > 0 && currentDateTime.hour() < 8) {
            newShift.startDateTime = currentDateTime.set('hour', 0);
            newShift.startDateTime.set('minute', 0);
            newShift.endDateTime = moment(newShift.startDateTime).add(8, 'hour');
        } else if (currentDateTime.hour() < 16) {
            newShift.startDateTime = currentDateTime.set('hour', 8);
            newShift.startDateTime.set('minute', 0);
            newShift.endDateTime = moment(newShift.startDateTime).add(8, 'hour');
        } else {
            newShift.startDateTime = currentDateTime.set('hour', 16);
            newShift.startDateTime.set('minute', 0);
            newShift.endDateTime = moment(newShift.startDateTime).add(8, 'hour');
        }
        this.constructionService.createShift(newShift).subscribe(res => {
            const createdShiftMessage = this.translateService.instant('createdShift');
            const closeMessage = this.translateService.instant('close');
            this.snackBar.open(createdShiftMessage, closeMessage);
            this.loadOpenShifts();
        });
    }

    onShiftSelected(event): void {
        this.shiftSelected.emit(event.value);
    }
}
