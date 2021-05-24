import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';


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
    ],
    exports: [
        MatCardModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatInputModule,
        MatButtonModule,
        MatSnackBarModule,
        MatIconModule,
        MatSelectModule
    ]
})
export class UiModule {
}
