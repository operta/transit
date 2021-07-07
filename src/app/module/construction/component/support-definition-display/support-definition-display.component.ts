import {Component, Input, OnInit} from '@angular/core';
import {SupportDefinition} from '../../model/support-definition';

@Component({
    selector: 'app-support-definition-display',
    templateUrl: './support-definition-display.component.html',
    styleUrls: ['./support-definition-display.component.css']
})
export class SupportDefinitionDisplayComponent implements OnInit {
    @Input() supportDefinition: SupportDefinition;

    constructor() {
    }

    ngOnInit(): void {
    }

}
