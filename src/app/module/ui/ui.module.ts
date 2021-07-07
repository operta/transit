import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatStepperModule} from '@angular/material/stepper';


@NgModule({
    imports: [
        MatCardModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatInputModule,
        MatButtonModule,
        MatSnackBarModule,
        MatIconModule,
        MatSelectModule,
        MatDatepickerModule,
        MatMomentDateModule,
        MatTableModule,
        MatGridListModule,
        MatStepperModule
    ],
    exports: [
        MatCardModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatInputModule,
        MatButtonModule,
        MatSnackBarModule,
        MatIconModule,
        MatSelectModule,
        MatDatepickerModule,
        MatTableModule,
        MatGridListModule,
        MatStepperModule
    ]
})
export class UiModule {
}
