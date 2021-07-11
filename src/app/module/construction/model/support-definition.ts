import {BaseClass} from './base-class';

export class SupportDefinition extends BaseClass {
    name: string;
    tunnelingClass: string;
    section: number;
    typeName: string;
    crossSectionName: string;

    constructor(name: string, tunnelingClass: string, section: number, typeName: string, crossSectionName: string, id?: number) {
        super(id);
        this.name = name;
        this.tunnelingClass = tunnelingClass;
        this.section = section;
        this.typeName = typeName;
        this.crossSectionName = crossSectionName;
    }

    static fromJson(input: any): SupportDefinition {
        const object: any = Object.assign({}, input);
        object.tunnelingClass = input['tunneling_class'];
        object.typeName = input['type.'].name;
        object.crossSectionName = input['cross_section.'].name;
        return object;
    }
}
