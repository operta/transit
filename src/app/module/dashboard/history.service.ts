import {SupportDefinition} from '../construction/model/support-definition';
import {Shift} from '../construction/model/shift';
import {Section} from '../construction/model/section';
import {Injectable} from '@angular/core';

@Injectable()
export class HistoryService {
    private _supportDefinition: SupportDefinition;
    private _shift: Shift;
    private _section: Section;

    constructor() {
        console.log('created history service')
    }

    get supportDefinition(): SupportDefinition {
        return this._supportDefinition;
    }

    set supportDefinition(value: SupportDefinition) {
        this._supportDefinition = value;
    }

    get shift(): Shift {
        return this._shift;
    }

    set shift(value: Shift) {
        this._shift = value;
    }

    get section(): Section {
        return this._section;
    }

    set section(value: Section) {
        this._section = value;
    }
}
