import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardPageComponent} from './page/dashboard-page/dashboard-page.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {UiModule} from '../ui/ui.module';
import {ShiftReportPageComponent} from './page/shift-report-page/shift-report-page.component';
import {TunnelRoundDetailPageComponent} from './page/tunnel-round-detail-page/tunnel-round-detail-page.component';
import {ConstructionModule} from '../construction/construction.module';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
    declarations: [
        DashboardPageComponent,
        ShiftReportPageComponent,
        TunnelRoundDetailPageComponent
    ],
    imports: [
        CommonModule,
        UiModule,
        DashboardRoutingModule,
        ConstructionModule,
        TranslateModule
    ]
})
export class DashboardModule {
}
