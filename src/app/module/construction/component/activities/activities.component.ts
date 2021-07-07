import {ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Shift} from '../../model/shift';
import {TunnelRound} from '../../model/tunnel-round';
import {ConstructionService} from '../../construction.service';
import {Activity} from '../../model/activity';
import {Router} from '@angular/router';

@Component({
    selector: 'app-activities',
    templateUrl: './activities.component.html',
    styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit, OnChanges {
    @Input() shift: Shift;
    @Input() round: TunnelRound;
    activities: Activity[];

    constructor(private constructionService: ConstructionService,
                private cd: ChangeDetectorRef,
                private router: Router) {
    }

    ngOnInit(): void {
        this.loadActivities(this.shift.id, this.round.id);
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.loadActivities(this.shift.id, this.round.id);
    }

    goToStepper(): void {
        this.router.navigateByUrl('/construction/add-activity-stepper/round/' + this.round.id + '/shift/' + this.shift.id);
    }

    onActivityDeleted(): void {
        this.loadActivities(this.shift.id, this.round.id);
    }

    private loadActivities(shiftId: number, roundId: number): void {
        this.constructionService.getActivities(shiftId, roundId).subscribe(
            res => {
                this.activities = res;
                this.cd.markForCheck();
            }
        );
    }
}
