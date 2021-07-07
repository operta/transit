import {Component, Input, OnInit} from '@angular/core';
import {Section} from '../../model/section';

@Component({
    selector: 'app-section-display',
    templateUrl: './section-display.component.html',
    styleUrls: ['./section-display.component.css']
})
export class SectionDisplayComponent implements OnInit {
    @Input() section: Section;

    constructor() {
    }

    ngOnInit(): void {
    }

}
