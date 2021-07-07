import {BaseClass} from './base-class';
import {Activity} from './activity';

export class TunnelRound extends BaseClass {
    section: number;
    startChainage: number;
    endChainage: number;
    comment: string;
    state: any;
    activities: Activity[];

    static fromJson(input: any): TunnelRound {
        const object: TunnelRound = Object.assign(new TunnelRound(), input);
        object.startChainage = input.start_chainage;
        object.endChainage = input.end_chainage;
        return object;
    }

    static toJson(input: TunnelRound): any {
        const object = Object.assign({
            start_chainage: input.startChainage,
            end_chainage: input.endChainage,
        }, input);
        delete object.startChainage;
        delete object.endChainage;
        return object;
    }
}
