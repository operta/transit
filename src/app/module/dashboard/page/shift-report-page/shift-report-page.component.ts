import {Component, OnInit} from '@angular/core';
import {Shift} from '../../../construction/model/shift';
import {SupportDefinition} from '../../../construction/model/support-definition';
import {Section} from '../../../construction/model/section';

@Component({
    selector: 'app-shift-report',
    templateUrl: './shift-report-page.component.html',
    styleUrls: ['./shift-report-page.component.css']
})
export class ShiftReportPageComponent implements OnInit {
    section: Section;
    shift: Shift;
    supportDefinition: SupportDefinition;

    constructor() {
    }

    ngOnInit(): void {
    }

    onSectionSelected(value): void {
        this.section = value;
        this.shift = null;
        this.supportDefinition = null;
    }

    onShiftSelected(value): void {
        this.shift = value;
    }

    onSupportDefinitionSelected(value): void {
        this.supportDefinition = value;
    }

}
