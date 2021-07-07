import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardPageComponent} from './page/dashboard-page/dashboard-page.component';
import {ShiftReportPageComponent} from './page/shift-report-page/shift-report-page.component';
import {TunnelRoundDetailPageComponent} from './page/tunnel-round-detail-page/tunnel-round-detail-page.component';


const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'shift-report',
        pathMatch: 'full'
      },
      {
        path: 'shift-report',
        component: ShiftReportPageComponent,
        data: {
          title: 'shiftReport'
        }
      },
      {
        path: 'tunnel-round/:roundId/shift/:shiftId',
        component: TunnelRoundDetailPageComponent,
        data: {
          title: 'tunnelRoundReport'
        }
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
