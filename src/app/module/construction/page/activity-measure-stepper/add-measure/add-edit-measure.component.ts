import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {ConstructionService} from '../../../construction.service';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MeasureDefinition} from '../../../model/measure-definition';
import {TunnelRound} from '../../../model/tunnel-round';
import {Measure} from '../../../model/measure';

@Component({
    selector: 'app-add-edit-measure',
    templateUrl: './add-edit-measure.component.html',
    styleUrls: ['./add-edit-measure.component.css']
})
export class AddEditMeasureComponent implements OnInit, OnChanges {
    @Input() parentForm: FormGroup;
    @Input() round: TunnelRound;
    @Input() editMeasures: Measure[];
    measureFormGroup: FormGroup;

    measureDefinitions: MeasureDefinition[] = [];
    displayedColumns: string[] = ['column-name', 'column-quantity', 'column-action'];
    addColumns: string[] = ['column-add-name', 'column-add-quantity', 'column-add-action'];

    constructor(private constructionService: ConstructionService,
                private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.constructionService.getMeasureDefinitions()
            .subscribe((res) => this.measureDefinitions = res);
        this.measureFormGroup = this.initializeForm();
        if (this.editMeasures && this.editMeasures.length > 0) {
            this.populateExistingMeasures(this.editMeasures);
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.measureFormGroup = this.initializeForm();
        if (this.editMeasures && this.editMeasures.length > 0) {
            this.populateExistingMeasures(this.editMeasures);
        }
    }

    private populateExistingMeasures(measures: Measure[]): void {
        measures.forEach(m => this.getMeasureArray().push(this.measureToFormGroup(m)));
    }

    private initializeForm(): FormGroup {
        return this.formBuilder.group({
            id: [null],
            round: [this.round.id, Validators.required],
            measureDefinition: [null, Validators.required],
            quantity: [null, [Validators.min(1), Validators.required]]
        });
    }

    private measureToFormGroup(measure: Measure): FormGroup {
        return this.formBuilder.group({
            id: [measure.id],
            round: [measure.round, Validators.required],
            measureDefinition: [measure.measure_definition, Validators.required],
            quantity: [measure.quantity, [Validators.min(1), Validators.required]]
        });
    }

    getMeasureArray(): FormArray {
        return this.parentForm.get('measures') as FormArray;
    }


    addMeasure(): void {
        this.getMeasureArray().push(this.measureFormGroup);
        this.measureFormGroup = this.initializeForm();
    }

    deleteElement(index: number): void {
        this.getMeasureArray().removeAt(index);
    }

    resolveName(id: number): string {
        return this.measureDefinitions.find(i => i.id === id).name;
    }
}
