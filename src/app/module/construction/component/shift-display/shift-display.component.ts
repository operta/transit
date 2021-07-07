import {Component, Input, OnInit} from '@angular/core';
import {Shift} from '../../model/shift';

@Component({
    selector: 'app-shift-display',
    templateUrl: './shift-display.component.html',
    styleUrls: ['./shift-display.component.css']
})
export class ShiftDisplayComponent implements OnInit {
    @Input() shift: Shift;

    constructor() {
    }

    ngOnInit(): void {
    }

}
