import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SectionSelectComponent} from './component/section-select/section-select.component';
import {ConstructionService} from './construction.service';
import {UiModule} from '../ui/ui.module';


@NgModule({
    imports: [
        CommonModule,
        UiModule
    ],
    providers: [
        ConstructionService
    ],
    declarations: [
        SectionSelectComponent
    ],
    exports: [
        SectionSelectComponent
    ]
})
export class ConstructionModule {
}
