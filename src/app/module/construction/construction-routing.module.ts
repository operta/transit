import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ActivityMeasureFormComponent} from './page/activity-measure-stepper/activity-measure-form.component';

const constructionRoutes: Routes = [
    {
        path: 'add-activity-form/round/:roundId/shift/:shiftId',
        component: ActivityMeasureFormComponent,
        data: {
            title: 'addActivityToTunnelRound'
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
