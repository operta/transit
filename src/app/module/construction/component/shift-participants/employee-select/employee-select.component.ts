import {Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {ConstructionService} from '../../../construction.service';
import {CompanyEmployee} from '../../../model/company-employee';
import {Observable} from 'rxjs';
import {ShiftParticipation} from '../../../model/shift-participation';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-employee-select',
    templateUrl: './employee-select.component.html',
    styleUrls: ['./employee-select.component.css']
})
export class EmployeeSelectComponent implements OnInit, OnChanges {
    roles = [
        'worker',
        'foreman'
    ];
    @Input() shiftParticipants: ShiftParticipation[];
    @Input() shiftId;
    @Output() employeeAddedToShift = new EventEmitter<void>();
    employees$: Observable<CompanyEmployee[]>;
    selectedEmployee: number = null;
    selectedRole: string = null;

    constructor(private constructionService: ConstructionService) {
    }

    ngOnInit(): void {
        this.employees$ = this.getFilteredEmployees();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.employees$ = this.getFilteredEmployees();
    }

    private getFilteredEmployees(): Observable<CompanyEmployee[]> {
        return this.constructionService.getEmployees()
            .pipe(map(i => i.filter(x => !this.shiftParticipants.map(o => o.employee).includes(x.id))));
    }

    onSelectEmployee(event): void {
        this.selectedEmployee = event.value;
    }

    onSelectRole(event): void {
        this.selectedRole = event.value;
    }

    addEmployeeToShift(): void {
        const obj: ShiftParticipation = new ShiftParticipation(this.selectedEmployee, this.shiftId, this.selectedRole);
        this.constructionService.addShiftParticipant(obj).subscribe(res => {
            this.employeeAddedToShift.emit();
        });
    }


}
