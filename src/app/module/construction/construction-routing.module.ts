import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ActivityMeasureStepperComponent} from './page/activity-measure-stepper/activity-measure-stepper.component';

const constructionRoutes: Routes = [
    {
        path: 'add-activity-stepper/round/:roundId/shift/:shiftId',
        component: ActivityMeasureStepperComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(constructionRoutes)],
    exports: [RouterModule]
})
export class ConstructionRoutingModule {
}
