import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthenticationModule} from './module/authentication/authentication.module';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {AppErrorInterceptor} from './app-error.interceptor';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {InternationalizationModule} from './module/internationalization/internationalization.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';

/**
 * The http loader factory : Loads the files from define path.
 * @param {HttpClient} http
 * @returns {TranslateHttpLoader}
 * @constructor
 */
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, '../assets/locales/', '.json');
}


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AuthenticationModule,
        InternationalizationModule.forRoot({ locale_id: 'en' }), // initiating with default language: en
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AppErrorInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
