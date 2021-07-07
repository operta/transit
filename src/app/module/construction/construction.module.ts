import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SectionSelectComponent} from './component/section-select/section-select.component';
import {ConstructionService} from './construction.service';
import {UiModule} from '../ui/ui.module';
import {ShiftSelectComponent} from './component/shift-select/shift-select.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {TunnelRoundsComponent} from './component/tunnel-rounds/tunnel-rounds.component';
import {ShiftParticipantsComponent} from './component/shift-participants/shift-participants.component';
import {EmployeeSelectComponent} from './component/shift-participants/employee-select/employee-select.component';
import {TimetableComponent} from './component/timetable/timetable.component';
import {ActivitiesComponent} from './component/activities/activities.component';
import {AddActivityComponent} from './page/activity-measure-stepper/add-activity/add-activity.component';
import {ActivityTypeSelectComponent} from './page/activity-measure-stepper/add-activity/activity-type-select/activity-type-select.component';
import {MeasuresComponent} from './component/measures/measures.component';
import {AddMeasureComponent} from './page/activity-measure-stepper/add-measure/add-measure.component';
import {MeasureDefinitionSelectComponent} from './page/activity-measure-stepper/add-measure/measure-definition-select/measure-definition-select.component';
import {ActivityMeasureStepperComponent} from './page/activity-measure-stepper/activity-measure-stepper.component';
import {ConstructionRoutingModule} from './construction-routing.module';
import {AddMeasureListPreviewComponent} from './page/activity-measure-stepper/add-measure/add-measure-list-preview/add-measure-list-preview.component';
import {SupportDefinitionSelectComponent} from './component/support-definition-select/support-definition-select.component';
import { SectionDisplayComponent } from './component/section-display/section-display.component';
import { ShiftDisplayComponent } from './component/shift-display/shift-display.component';
import { SupportDefinitionDisplayComponent } from './component/support-definition-display/support-definition-display.component';
import { TunnelRoundDisplayComponent } from './component/tunnel-round-display/tunnel-round-display.component';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
    imports: [
        CommonModule,
        UiModule,
        ReactiveFormsModule,
        FormsModule,
        NgxMaterialTimepickerModule,
        ConstructionRoutingModule,
        TranslateModule
    ],
    providers: [
        ConstructionService
    ],
    declarations: [
        SectionSelectComponent,
        ShiftSelectComponent,
        ShiftParticipantsComponent,
        EmployeeSelectComponent,
        TunnelRoundsComponent,
        TimetableComponent,
        ActivitiesComponent,
        AddActivityComponent,
        ActivityTypeSelectComponent,
        MeasuresComponent,
        AddMeasureComponent,
        MeasureDefinitionSelectComponent,
        ActivityMeasureStepperComponent,
        AddMeasureListPreviewComponent,
        SupportDefinitionSelectComponent,
        SectionDisplayComponent,
        ShiftDisplayComponent,
        SupportDefinitionDisplayComponent,
        TunnelRoundDisplayComponent,
    ],
    exports: [
        SectionSelectComponent,
        ShiftSelectComponent,
        ShiftParticipantsComponent,
        EmployeeSelectComponent,
        TunnelRoundsComponent,
        ActivitiesComponent,
        AddActivityComponent,
        ActivityTypeSelectComponent,
        TimetableComponent,
        MeasuresComponent,
        AddMeasureComponent,
        MeasureDefinitionSelectComponent,
        SupportDefinitionSelectComponent,
        SectionDisplayComponent,
        ShiftDisplayComponent,
        SupportDefinitionDisplayComponent,
        TunnelRoundDisplayComponent
    ]
})
export class ConstructionModule {
}
