import {Component, Input, OnInit} from '@angular/core';
import {TunnelRound} from '../../model/tunnel-round';

@Component({
    selector: 'app-tunnel-round-display',
    templateUrl: './tunnel-round-display.component.html',
    styleUrls: ['./tunnel-round-display.component.css']
})
export class TunnelRoundDisplayComponent implements OnInit {
    @Input() tunnelRound: TunnelRound;

    constructor() {
    }

    ngOnInit(): void {
    }

}
