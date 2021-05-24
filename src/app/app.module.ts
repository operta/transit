import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthenticationModule} from './module/authentication/authentication.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AppErrorInterceptor} from './app-error.interceptor';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AuthenticationModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AppErrorInterceptor,
            multi: true
        },
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
