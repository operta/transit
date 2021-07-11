import {BaseClass} from './base-class';

export class Measure extends BaseClass {
    name: string;
    unit: string;
    quantity: number;
    round: number;
    activity: number;
    measure_definition: number;
    activityName: string;


    constructor(id?: number, name?: string, unit?: string, quantity?: number, round?: number, activity?: number,
                measure_definition?: number, activityName?: string) {
        super(id);
        this.name = name;
        this.unit = unit;
        this.quantity = quantity;
        this.round = round;
        this.activity = activity;
        this.measure_definition = measure_definition;
        this.activityName = activityName;
    }

    static fromJson(input: any): Measure {
        const object: any = Object.assign({}, input);
        object.name = input['measure_definition.'].name;
        object.unit = input['measure_definition.']['unit.'].name;
        object.activityName = input['activity.']['type.'].name;
        return object;
    }

    static toJson(input: Measure): any {
        const object = Object.assign({}, input);
        delete object.name;
        delete object.unit;
        return object;
    }
}
