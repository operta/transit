import {ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ConstructionService} from '../../construction.service';
import {Measure} from '../../model/measure';
import {Activity} from '../../model/activity';
import {forkJoin} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-measures',
    templateUrl: './measures.component.html',
    styleUrls: ['./measures.component.css']
})
export class MeasuresComponent implements OnInit, OnChanges {
    @Input() activities: Activity[];
    @Input() roundId: number;
    measures: Measure[] = [];

    displayedColumns: string[] = ['column-name', 'column-unit', 'column-quantity', 'column-activity', 'column-action'];

    constructor(private constructionService: ConstructionService) {
    }

    ngOnInit(): void {
        this.loadMeasures();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.loadMeasures();
    }

    loadMeasures(): void {
        this.constructionService.getMeasuresByRound(this.roundId)
            .pipe(
                map(measures => measures.filter(m => this.activities.map(a => a.id).includes(m.activity)))
            )
            .subscribe(res => this.measures = res);
    }

    deleteMeasure(measureId: number): void {
        this.constructionService.deleteMeasure(measureId)
            .subscribe(res => this.loadMeasures());
    }

}
