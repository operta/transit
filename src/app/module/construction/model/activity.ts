import {BaseClass} from './base-class';
import {Moment} from 'moment';
import {DateTimeSerializer} from './datetime';
import * as moment from 'moment';

export class Activity extends BaseClass {
    type: number;
    typeName: string;
    round: number;
    shift: number;
    startDateTime: Moment;
    endDateTime: Moment;
    comment: string;
    measures: any[];

    constructor(round?: number, shift?: number, type?: number, startDateTime: Moment = moment(),
                endDateTime: Moment = moment(), comment?: string, measures?: any[]) {
        super();
        this.type = type;
        this.round = round;
        this.shift = shift;
        this.startDateTime = startDateTime;
        this.endDateTime = endDateTime;
        this.comment = comment;
        this.measures = measures;
    }

    static fromJson(input: any): Activity {
        const object: Activity = Object.assign(new Activity(), input);
        object.startDateTime = DateTimeSerializer.deserialize(input.start_time);
        object.endDateTime = DateTimeSerializer.deserialize(input.end_time);
        object.typeName = input['type.'].name;
        return object;
    }

    static toJson(input: Activity): any {
        const object = Object.assign({
            start_time: DateTimeSerializer.serialize(input.startDateTime),
            end_time: DateTimeSerializer.serialize(input.endDateTime),
        }, input);
        delete object.startDateTime;
        delete object.endDateTime;
        return object;
    }
}
