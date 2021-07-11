import {Component, OnInit} from '@angular/core';
import {Shift} from '../../../construction/model/shift';
import {SupportDefinition} from '../../../construction/model/support-definition';
import {Section} from '../../../construction/model/section';
import {HistoryService} from '../../history.service';

@Component({
    selector: 'app-shift-report',
    templateUrl: './shift-report-page.component.html',
    styleUrls: ['./shift-report-page.component.css']
})
export class ShiftReportPageComponent implements OnInit {
    section: Section;
    shift: Shift;
    supportDefinition: SupportDefinition;

    constructor(private historyService: HistoryService) {
    }

    ngOnInit(): void {
        console.log('on init');
        this.section = this.historyService.section;
        this.supportDefinition = this.historyService.supportDefinition;
        this.shift = this.historyService.shift;
    }

    onSectionSelected(value): void {
        this.section = value;
        this.shift = null;
        this.supportDefinition = null;
        this.historyService.section = this.section;
        this.historyService.supportDefinition = this.supportDefinition;
        this.historyService.shift = this.shift;
    }

    onShiftSelected(value): void {
        this.shift = value;
        this.historyService.shift = this.shift;
    }

    onSupportDefinitionSelected(value): void {
        this.supportDefinition = value;
        this.historyService.supportDefinition = this.supportDefinition;
    }

}
