import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {ConstructionService} from '../../../construction.service';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-add-measure',
    templateUrl: './add-measure.component.html',
    styleUrls: ['./add-measure.component.css']
})
export class AddMeasureComponent implements OnInit, OnChanges {
    @Input() parentForm: FormGroup;
    @Input() roundId: number;
    measureFormGroup: FormGroup;

    constructor(private constructionService: ConstructionService,
                private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        if (this.parentForm && this.roundId) {
            this.measureFormGroup = this.initializeForm();
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.parentForm && this.roundId) {
            this.measureFormGroup = this.initializeForm();
        }
    }

    private initializeForm(): FormGroup {
        return this.formBuilder.group({
            round: [this.roundId, Validators.required],
            measureDefinition: [null, Validators.required],
            quantity: [null, [Validators.min(1), Validators.required]]
        });
    }

    getMeasureArray(): FormArray {
        return this.parentForm.get('measures') as FormArray;
    }

    addMeasure(): void {
        this.getMeasureArray().push(this.measureFormGroup);
        this.measureFormGroup = this.initializeForm();
    }
}
