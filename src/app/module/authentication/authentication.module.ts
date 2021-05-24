import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './page/login/login.component';
import {UiModule} from '../ui/ui.module';
import {AuthenticationService} from './authentication.service';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './auth.interceptor';
import {AuthGuard} from './guard/auth.guard';
import {UserDataGuard} from './guard/user-data.guard';


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        UiModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        AuthenticationService,

        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },

        AuthGuard,
        UserDataGuard
    ]
})
export class AuthenticationModule {
}
