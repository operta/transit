import {Component, Input, OnInit} from '@angular/core';
import {ConstructionService} from '../../construction.service';
import {TunnelRound} from '../../model/tunnel-round';
import {Router} from '@angular/router';
import {Shift} from '../../model/shift';
import {SupportDefinition} from '../../model/support-definition';

@Component({
    selector: 'app-tunnel-rounds',
    templateUrl: './tunnel-rounds.component.html',
    styleUrls: ['./tunnel-rounds.component.css']
})
export class TunnelRoundsComponent implements OnInit {
    @Input() sectionId: number;
    @Input() shift: Shift;
    @Input() supportDefinition: SupportDefinition;
    tunnelRounds: TunnelRound[];
    displayedColumns: string[] = ['column-startChainage', 'column-endChainage', 'column-state', 'column-action'];

    constructor(private constructionService: ConstructionService, private router: Router) {
    }

    ngOnInit(): void {
        this.loadData();
    }

    private loadData() {
        this.constructionService.getTunnelRounds(this.sectionId, this.supportDefinition.id).subscribe(res => {
            this.tunnelRounds = res.reverse();
        });
    }

    goToTunnelRound(roundId: number): void {
        this.router.navigateByUrl(`/dashboard/tunnel-round/${roundId}/shift/${this.shift.id}`);
    }

    goToTunnelRoundForm(): void {
        this.router.navigateByUrl(`/construction/add-tunnel-round-form/section/${this.sectionId}/support-definition/${this.supportDefinition.id}`);
    }

    deleteRound(roundId: number): void {
        this.constructionService.deleteRound(roundId).subscribe(res => this.loadData());
    }
}
