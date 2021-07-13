import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ActivityMeasureFormComponent} from './page/activity-measure-form/activity-measure-form.component';
import {TunnelRoundFormComponent} from './page/tunnel-round-form/tunnel-round-form.component';

const constructionRoutes: Routes = [
    {
        path: 'add-activity-form/round/:roundId/shift/:shiftId',
        component: ActivityMeasureFormComponent,
        data: {
            title: 'addActivityToTunnelRound'
        }
    },
    {
        path: 'add-tunnel-round-form/section/:sectionId/support-definition/:supportDefinitionId',
        component: TunnelRoundFormComponent,
        data: {
            title: 'createTunnelRound'
        }
    },

    {
        path: 'add-tunnel-round-form/round/:roundId',
        component: TunnelRoundFormComponent,
        data: {
            title: 'editTunnelRound'
        }
    },
    {
        path: 'add-activity-form/round/:roundId/shift/:shiftId/activity/:activityId',
        component: ActivityMeasureFormComponent,
        data: {
            title: 'editActivity'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(constructionRoutes)],
    exports: [RouterModule]
})
export class ConstructionRoutingModule {
}
