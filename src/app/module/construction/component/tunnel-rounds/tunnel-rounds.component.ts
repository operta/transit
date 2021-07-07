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
    displayedColumns: string[] = ['column-startChainage', 'column-endChainage', 'column-action'];

    constructor(private constructionService: ConstructionService, private router: Router) {
    }

    ngOnInit(): void {
        this.constructionService.getTunnelRounds(this.sectionId, this.supportDefinition.id).subscribe(res => {
            this.tunnelRounds = res;
        });
    }

    goToTunnelRound(roundId: number): void {
        this.router.navigateByUrl(`/dashboard/tunnel-round/${roundId}/shift/${this.shift.id}`);
    }
}
