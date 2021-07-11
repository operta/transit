import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {MeasureDefinition} from '../../../../model/measure-definition';
import {ConstructionService} from '../../../../construction.service';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-measure-definition-select',
    templateUrl: './measure-definition-select.component.html',
    styleUrls: ['./measure-definition-select.component.css']
})
export class MeasureDefinitionSelectComponent implements OnInit {
    @Input() formGroup: FormGroup;
    @Output() definitionSelected = new EventEmitter<number>();
    definitions$: Observable<MeasureDefinition[]>;

    constructor(private constructionService: ConstructionService) {
    }

    ngOnInit(): void {
        this.definitions$ = this.constructionService.getMeasureDefinitions();
    }

    onDefinitionSelect(event): void {
        this.definitionSelected.emit(+event.value);
    }
}
