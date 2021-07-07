import {BaseClass} from "./base-class";

export class Section extends BaseClass {
    name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }
}
