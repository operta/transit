import {BaseClass} from './base-class';

export class CompanyEmployee extends BaseClass {
    company: number;
    party: number;
    name: string;

    static fromJson(input: any): CompanyEmployee {
        const object: any = Object.assign({}, input);
        object.name = input['party.'].name;
        return object;
    }
}
