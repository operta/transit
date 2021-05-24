import {Component} from '@angular/core';
import {AuthenticationService} from '../../authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;
  loading = false;

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  login(): void {
    this.loading = true;
    this.authService.login({user: this.username, password: this.password})
      .subscribe((res) => {
        this.router.navigate(['dashboard']);
      }, () => {
        this.loading = false;
      }, () => {
        this.loading = false;
      });
  }

}
