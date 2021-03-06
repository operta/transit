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
import {TimetableComponent} from './component/timetable/timetable.component';
import {ActivitiesComponent} from './component/activities/activities.component';
import {AddEditActivityComponent} from './page/activity-measure-form/add-edit-activity/add-edit-activity.component';
import {ActivityTypeSelectComponent} from './page/activity-measure-form/add-edit-activity/activity-type-select/activity-type-select.component';
import {MeasuresComponent} from './component/measures/measures.component';
import {AddDeleteMeasureComponent} from './page/activity-measure-form/add-delete-measure/add-delete-measure.component';
import {MeasureDefinitionSelectComponent} from './page/activity-measure-form/add-delete-measure/measure-definition-select/measure-definition-select.component';
import {ActivityMeasureFormComponent} from './page/activity-measure-form/activity-measure-form.component';
import {ConstructionRoutingModule} from './construction-routing.module';
import {SupportDefinitionSelectComponent} from './component/support-definition-select/support-definition-select.component';
import { SectionDisplayComponent } from './component/section-display/section-display.component';
import { ShiftDisplayComponent } from './component/shift-display/shift-display.component';
import { SupportDefinitionDisplayComponent } from './component/support-definition-display/support-definition-display.component';
import { TunnelRoundDisplayComponent } from './component/tunnel-round-display/tunnel-round-display.component';
import {TranslateModule} from '@ngx-translate/core';
import { TunnelRoundFormComponent } from './page/tunnel-round-form/tunnel-round-form.component';


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
        TunnelRoundsComponent,
        TimetableComponent,
        ActivitiesComponent,
        AddEditActivityComponent,
        ActivityTypeSelectComponent,
        MeasuresComponent,
        AddDeleteMeasureComponent,
        MeasureDefinitionSelectComponent,
        ActivityMeasureFormComponent,
        SupportDefinitionSelectComponent,
        SectionDisplayComponent,
        ShiftDisplayComponent,
        SupportDefinitionDisplayComponent,
        TunnelRoundDisplayComponent,
        TunnelRoundFormComponent,
    ],
    exports: [
        SectionSelectComponent,
        ShiftSelectComponent,
        ShiftParticipantsComponent,
        TunnelRoundsComponent,
        ActivitiesComponent,
        AddEditActivityComponent,
        ActivityTypeSelectComponent,
        TimetableComponent,
        MeasuresComponent,
        AddDeleteMeasureComponent,
        MeasureDefinitionSelectComponent,
        SupportDefinitionSelectComponent,
        SectionDisplayComponent,
        ShiftDisplayComponent,
        SupportDefinitionDisplayComponent,
        TunnelRoundDisplayComponent,
        TunnelRoundFormComponent
    ]
})
export class ConstructionModule {
}
