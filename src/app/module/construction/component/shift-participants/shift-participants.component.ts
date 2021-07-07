import {Component, Input, OnChanges} from '@angular/core';
import {ConstructionService} from '../../construction.service';
import {ShiftParticipation} from '../../model/shift-participation';
import {Shift} from '../../model/shift';

@Component({
    selector: 'app-shift-participants',
    templateUrl: './shift-participants.component.html',
    styleUrls: ['./shift-participants.component.css']
})
export class ShiftParticipantsComponent implements OnChanges {
    @Input() shift: Shift;
    participants: ShiftParticipation[] = [];
    displayedColumns: string[] = ['column-name', 'column-role', 'column-action'];

    constructor(private constructionService: ConstructionService) {
    }

    ngOnChanges(): void {
        this.loadShiftParticipants();
    }

    deleteParticipant(participantId: number): void {
        this.constructionService.deleteShiftParticipant(participantId).subscribe(res => this.loadShiftParticipants());
    }

    loadShiftParticipants(): void {
        this.constructionService.getShiftParticipants(this.shift.id).subscribe(res => this.participants = res);
    }

}
