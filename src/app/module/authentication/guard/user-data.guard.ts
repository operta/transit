import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class UserDataGuard implements CanActivate {
    constructor(private snackBar: MatSnackBar, private translateService: TranslateService) {
    }

    canActivate(): boolean {
        if (!localStorage.getItem('employee_id') || !localStorage.getItem('user_id')) {
            const employeeNotExistMessage = this.translateService.instant('employeeNotExist');
            const closeMessage = this.translateService.instant('close');
            this.snackBar.open(employeeNotExistMessage, closeMessage);
            return false;
        }
        return true;
    }

}
