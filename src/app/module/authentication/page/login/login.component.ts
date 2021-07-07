import {Component} from '@angular/core';
import {AuthenticationService} from '../../authentication.service';
import {Router} from '@angular/router';
import {LocalizationService} from '../../../internationalization/localization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;
  loading = false;
  selectedLang = 'de';

  constructor(private authService: AuthenticationService, private router: Router,
              private localizationService: LocalizationService) {
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

  onSelectLang(event: any): void {
      const lang: string = event.value;
      this.localizationService.useLanguage(lang);
  }

}
