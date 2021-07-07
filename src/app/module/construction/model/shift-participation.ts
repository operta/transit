import {BaseClass} from './base-class';

export class ShiftParticipation extends BaseClass {
    employee: number;
    shift: number;
    role: string;
    name: string;

    constructor(employee: number, shift: number, role: string) {
        super();
        this.employee = employee;
        this.shift = shift;
        this.role = role;
    }

    static fromJson(input: any): ShiftParticipation {
        const object: any = Object.assign({}, input);
        object.name = input['employee.']['party.'].name;
        return object;
    }
}
