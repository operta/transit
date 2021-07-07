import {Component, Input, OnInit} from '@angular/core';
import {FormArray} from '@angular/forms';
import {ConstructionService} from '../../../../construction.service';
import {MeasureDefinition} from '../../../../model/measure-definition';

@Component({
    selector: 'app-add-measure-list-preview',
    templateUrl: './add-measure-list-preview.component.html',
    styleUrls: ['./add-measure-list-preview.component.css']
})
export class AddMeasureListPreviewComponent implements OnInit {
    @Input() formArray: FormArray;
    measureDefinitions: MeasureDefinition[] = [];

    displayedColumns: string[] = ['column-name', 'column-unit', 'column-quantity', 'column-action'];

    constructor(private constructionService: ConstructionService) {
        this.constructionService.getMeasureDefinitions()
            .subscribe((res) => this.measureDefinitions = res);
    }

    ngOnInit(): void {
    }

    deleteElement(index: number): void {
        this.formArray.removeAt(index);
    }

    resolveName(id: number): string {
        return this.measureDefinitions.find(i => i.id === id).name;
    }

    resolveUnit(id: number): string {
        return this.measureDefinitions.find(i => i.id === id).unit;
    }

}
