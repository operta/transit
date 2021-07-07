import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private snackBar: MatSnackBar, private translateService: TranslateService) {
    }

    canActivate(): boolean {
        if (!localStorage.getItem('jwt_token')) {
            const accessDeniedMessage = this.translateService.instant('accessDenied');
            const closeTranslated = this.translateService.instant('close');
            this.snackBar.open(accessDeniedMessage, closeTranslated);
            return false;
        }
        return true;
    }

}
