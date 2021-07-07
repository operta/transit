import {Moment} from 'moment';
import * as moment from 'moment';

class TrytonDateTime {
    microsecond: number;
    second: number;
    minute: number;
    hour: number;
    day: number;
    month: number;
    year: number;

    private __class__ = 'datetime';
}

export class DateTimeSerializer {

    static deserialize(input: TrytonDateTime): Moment {
        if (input) {
            const object: Moment = moment();
            object.set('year', input.year);
            object.set('month', input.month - 1);
            object.set('date', input.day);
            object.set('hour', input.hour);
            object.set('minute', input.minute);
            object.set('second', 0);
            object.set('millisecond', 0);
            return object;

        }
        return null;
    }

    static serialize(input: Moment): TrytonDateTime {
        const object = new TrytonDateTime();
        object.year = input.year();
        object.month = input.month() + 1;
        object.day = input.date();
        object.hour = input.hour();
        object.minute = input.minute();
        object.second = 0;
        object.microsecond = 0;
        return object;
    }
}
