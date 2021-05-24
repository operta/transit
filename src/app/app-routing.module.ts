import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './module/authentication/page/login/login.component';
import {AuthGuard} from './module/authentication/guard/auth.guard';
import {UserDataGuard} from './module/authentication/guard/user-data.guard';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./module/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard, UserDataGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
