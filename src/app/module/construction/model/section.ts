import {BaseClass} from "./base-class";

export class Section extends BaseClass {
    name: string;

    constructor(name: string, id?: number) {
        super(id);
        this.name = name;
    }
}
