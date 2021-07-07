import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ConstructionService} from '../../../construction/construction.service';
import {Shift} from '../../../construction/model/shift';
import {TunnelRound} from '../../../construction/model/tunnel-round';

@Component({
    selector: 'app-tunnel-round-detail-page',
    templateUrl: './tunnel-round-detail-page.component.html',
    styleUrls: ['./tunnel-round-detail-page.component.css']
})
export class TunnelRoundDetailPageComponent implements OnInit {
    shiftId: number;
    roundId: number;
    shift: Shift;
    round: TunnelRound;

    constructor(private router: Router, private route: ActivatedRoute, private constructionService: ConstructionService) {
        this.route.params.subscribe(params => {
            this.shiftId = +params.shiftId;
            this.roundId = +params.roundId;
            this.constructionService.getShift(this.shiftId).subscribe(res => this.shift = res);
            this.constructionService.getTunnelRound(this.roundId).subscribe((res: TunnelRound) => this.round = res);
        });
    }

    ngOnInit(): void {
    }
}
