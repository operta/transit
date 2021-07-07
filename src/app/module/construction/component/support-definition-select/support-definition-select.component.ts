import {Component, Output, EventEmitter, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Observable} from 'rxjs';
import {SupportDefinition} from '../../model/support-definition';
import {ConstructionService} from '../../construction.service';

@Component({
    selector: 'app-support-definition-select',
    templateUrl: './support-definition-select.component.html',
    styleUrls: ['./support-definition-select.component.css']
})
export class SupportDefinitionSelectComponent implements OnChanges {
    @Input() sectionId: number;
    @Output() supportDefinitionSelected = new EventEmitter<SupportDefinition>();
    definitions$: Observable<SupportDefinition[]>;

    constructor(private constructionService: ConstructionService) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.definitions$ = this.constructionService.getSupportDefinitionsBySection(this.sectionId);
    }

    onDefinitionSelected(event): void {
        this.supportDefinitionSelected.emit(event.value);
    }
}
