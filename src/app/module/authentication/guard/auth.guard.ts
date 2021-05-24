import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private snackBar: MatSnackBar) {
  }

  canActivate(): boolean {
    if (!localStorage.getItem('jwt_token')) {
      this.snackBar.open('Access Denied, authentication required', 'Close');
      return false;
    }
    return true;
  }

}
