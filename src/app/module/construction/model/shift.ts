import {BaseClass} from './base-class';
import {Moment} from 'moment';
import {DateTimeSerializer} from './datetime';
import * as moment from 'moment';
import {Activity} from './activity';

export class Shift extends BaseClass {
    section: number;
    startDateTime: Moment;
    endDateTime: Moment;
    comment: string;
    participation: number[];
    activities: Activity[];
    state: number;

    constructor(section?: number, startDateTime: Moment = moment(), endDateTime: Moment = moment(),
                comment?: string, participation?: number[], state?: number, id?: number) {
        super(id);
        this.section = section;
        this.startDateTime = startDateTime;
        this.endDateTime = endDateTime;
        this.comment = comment;
        this.participation = participation;
        this.state = state;
    }

    static fromJson(input: any): Shift {
        const object: Shift = Object.assign(new Shift(), input);
        object.startDateTime = DateTimeSerializer.deserialize(input.start_time);
        object.endDateTime = DateTimeSerializer.deserialize(input.end_time);
        object.activities = input['activities.'];
        object.activities.map(o => {
            o.startDateTime = DateTimeSerializer.deserialize(input.start_time);
            o.endDateTime = DateTimeSerializer.deserialize(input.end_time);
            return o;
        });
        return object;
    }

    static toJson(input: Shift): any {
        const object = Object.assign({
            start_time: DateTimeSerializer.serialize(input.startDateTime),
            end_time: DateTimeSerializer.serialize(input.endDateTime),
        }, input);
        delete object.startDateTime;
        delete object.endDateTime;
        return object;
    }
}
