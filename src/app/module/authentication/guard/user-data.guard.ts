import {Injectable} from "@angular/core";
import {CanActivate} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable()
export class UserDataGuard implements CanActivate{
  constructor(private snackBar: MatSnackBar){}

  canActivate(): boolean {
    if (!localStorage.getItem('employee_id') || !localStorage.getItem('user_id')) {
      this.snackBar.open('Your employee profile is not complete, please contact the administrator.', 'Close');
      return false;
    }
    return true;
  }

}
