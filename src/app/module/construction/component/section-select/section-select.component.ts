import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ConstructionService} from '../../construction.service';
import {Section} from '../../model/section';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-section-select',
    templateUrl: './section-select.component.html',
    styleUrls: ['./section-select.component.css']
})
export class SectionSelectComponent implements OnInit {
    @Output() sectionSelected = new EventEmitter<Section>();
    sections$: Observable<Section[]>;

    constructor(private constructionService: ConstructionService) {
    }

    ngOnInit(): void {
        this.sections$ = this.constructionService.getSections();
    }

    onSectionSelected(event): void {
        this.sectionSelected.emit(event.value);
    }
}
