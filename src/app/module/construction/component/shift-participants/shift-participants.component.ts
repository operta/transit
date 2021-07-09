import {Component, Input, OnChanges} from '@angular/core';
import {ConstructionService} from '../../construction.service';
import {ShiftParticipation} from '../../model/shift-participation';
import {Shift} from '../../model/shift';
import {Observable} from 'rxjs';
import {CompanyEmployee} from '../../model/company-employee';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-shift-participants',
    templateUrl: './shift-participants.component.html',
    styleUrls: ['./shift-participants.component.css']
})
export class ShiftParticipantsComponent implements OnChanges {
    @Input() shift: Shift;
    participants: ShiftParticipation[] = [];
    displayedColumns: string[] = ['column-name', 'column-role', 'column-action'];

    employees$: Observable<CompanyEmployee[]>;
    roles = [
        'worker',
        'foreman'
    ];
    selectedEmployee: number = null;
    selectedRole: string = null;
    addColumns: string[] = ['column-add-name', 'column-add-role', 'column-add-action'];

    constructor(private constructionService: ConstructionService) {
    }

    ngOnChanges(): void {
        this.loadShiftParticipants();
    }

    private loadShiftParticipants(): void {
        this.constructionService.getShiftParticipants(this.shift.id).subscribe(res => {
            this.participants = res;
            this.employees$ = this.getFilteredEmployees(this.participants);
        });
    }

    private getFilteredEmployees(shiftParticipants: ShiftParticipation[]): Observable<CompanyEmployee[]> {
        return this.constructionService.getEmployees()
            .pipe(map(i => i.filter(x => !shiftParticipants.map(o => o.employee).includes(x.id))));
    }

    onSelectEmployee(event): void {
        this.selectedEmployee = event.value;
    }

    onSelectRole(event): void {
        this.selectedRole = event.value;
    }

    deleteParticipant(participantId: number): void {
        this.constructionService.deleteShiftParticipant(participantId).subscribe(res => this.loadShiftParticipants());
    }

    addParticipant(): void {
        const obj: ShiftParticipation = new ShiftParticipation(this.selectedEmployee, this.shift.id, this.selectedRole);
        this.constructionService.addShiftParticipant(obj).subscribe(res => {
            this.loadShiftParticipants();
            // TODO just add to participants
            console.log(res);
        });
    }


}
