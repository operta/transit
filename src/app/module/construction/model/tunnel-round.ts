import {BaseClass} from './base-class';
import {Activity} from './activity';

export class TunnelRound extends BaseClass {
    section: number;
    startChainage: number;
    endChainage: number;
    comment: string;
    state: any;
    supportDefinition: number;


    constructor(id?: number, section?: number, startChainage?: number, endChainage?: number, supportDefinition?: number,
                comment?: string, state?: any) {
        super(id);
        this.section = section;
        this.startChainage = startChainage;
        this.endChainage = endChainage;
        this.supportDefinition = supportDefinition;
        this.comment = comment;
        this.state = state;
    }

    static fromJson(input: any): TunnelRound {
        const object: TunnelRound = Object.assign(new TunnelRound(), input);
        object.startChainage = input.start_chainage;
        object.endChainage = input.end_chainage;
        object.supportDefinition = input.support_definition;
        return object;
    }

    static toJson(input: TunnelRound): any {
        const object = Object.assign({
            start_chainage: input.startChainage,
            end_chainage: input.endChainage,
            support_definition: input.supportDefinition
        }, input);
        delete object.startChainage;
        delete object.endChainage;
        delete object.supportDefinition;
        return object;
    }
}
