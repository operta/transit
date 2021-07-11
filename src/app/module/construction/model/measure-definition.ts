import {BaseClass} from './base-class';

export class MeasureDefinition extends BaseClass {
    name: string;
    unit: string;

    constructor(name: string, unit: string, id?:number) {
        super(id);
        this.name = name;
        this.unit = unit;
    }

    static fromJson(input: any): MeasureDefinition {
        const object: any = Object.assign({}, input);
        object.unit = input['unit.'].name;
        return object;
    }
}
