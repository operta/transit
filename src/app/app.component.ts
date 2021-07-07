import {Component, ViewEncapsulation} from '@angular/core';
import {LocalizationService} from './module/internationalization/localization.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    title = 'TransIT';

    constructor(private localizationService: LocalizationService) {
        this.localizationService.useLanguage('en');
    }
}
