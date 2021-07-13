import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {TunnelRound} from '../../model/tunnel-round';
import {ConstructionService} from '../../construction.service';
import {Location} from '@angular/common';
import {TranslateService} from '@ngx-translate/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
    selector: 'app-tunnel-round-form',
    templateUrl: './tunnel-round-form.component.html',
    styleUrls: ['./tunnel-round-form.component.css']
})
export class TunnelRoundFormComponent implements OnInit {
    roundFormGroup: FormGroup;
    title: string;
    isEdit = false;

    constructor(private route: ActivatedRoute,
                private formBuilder: FormBuilder,
                private location: Location,
                private constructionService: ConstructionService,
                private translateService: TranslateService,
                private snackBar: MatSnackBar) {
    }

    ngOnInit(): void {
        this.title = this.route.snapshot.data.title;
        this.route.params.subscribe(params => {
            const sectionId = +params.sectionId;
            const supportDefinitionId = +params.supportDefinitionId;
            if (sectionId && supportDefinitionId) {
                this.constructionService.getTunnelRounds(sectionId, supportDefinitionId).subscribe(rounds => {
                        let minChainage = 0;
                        if (rounds && rounds.length > 0) {
                            // tryton rest api returns sorted rounds
                            const lastRound = rounds.pop();
                            minChainage = lastRound.endChainage;
                        }
                        this.roundFormGroup = this.initializeForm(sectionId, supportDefinitionId, minChainage);
                    }
                );
            } else {
                this.isEdit = true;
                const roundId = +params.roundId;
                this.constructionService.getTunnelRound(roundId).subscribe(res => {
                    this.roundFormGroup = this.editForm(res);
                });
            }
        });
    }

    private initializeForm(sectionId: number, supportDefinitionId: number, minChainage: number): FormGroup {
        const endChainage = +(minChainage + 0.01).toFixed(2);
        return this.formBuilder.group({
            section: [sectionId, Validators.required],
            startChainage: [minChainage, [Validators.required, Validators.min(minChainage)]],
            endChainage: [endChainage, [Validators.required, Validators.min(endChainage)]],
            supportDefinition: [supportDefinitionId, Validators.required]
        });
    }

    private editForm(round: TunnelRound): FormGroup {
        return this.formBuilder.group({
            id: [round.id, Validators.required],
            state: [round.state, Validators.required],
            comment: [''],
            section: [round.section, Validators.required],
            startChainage: [round.startChainage, [Validators.required]],
            endChainage: [round.endChainage, [Validators.required]],
            supportDefinition: [round.supportDefinition, Validators.required]
        });
    }

    addChainage(input, controlName: string): void {
        input.stepUp();
        this.roundFormGroup.get(controlName).setValue(+input.value);
    }

    subtractChainage(input, controlName: string): void {
        input.stepDown();
        this.roundFormGroup.get(controlName).setValue(+input.value);
    }


    createRound(): void {
        const formValues = this.roundFormGroup.value;
        const round = new TunnelRound(
            null,
            formValues.section,
            formValues.startChainage,
            formValues.endChainage,
            formValues.supportDefinition
        );
        if (this.isEdit) {
            round.id = formValues.id;
            round.state = formValues.state;
            round.comment = formValues.comment;
            this.constructionService.editTunnelRound(round).subscribe(res => {
                const message = this.translateService.instant('tunnelRoundSaved');
                const closedMessage = this.translateService.instant('close');
                this.snackBar.open(message, closedMessage);
                this.finish();
            });
        } else {
            this.constructionService.createTunnelRound(round).subscribe(res => {
                const message = this.translateService.instant('tunnelRoundSaved');
                const closedMessage = this.translateService.instant('close');
                this.snackBar.open(message, closedMessage);
                this.finish();
            });
        }

    }

    finish(): void {
        this.location.back();
    }

}
