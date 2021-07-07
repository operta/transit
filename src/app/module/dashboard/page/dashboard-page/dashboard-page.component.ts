import {Component} from '@angular/core';
import {
    ActivatedRoute,
    ChildActivationEnd,
    Router
} from '@angular/router';
import {AuthenticationService} from '../../../authentication/authentication.service';
import {filter} from 'rxjs/operators';
import {Location} from '@angular/common';

@Component({
    selector: 'app-dashboard-page',
    templateUrl: './dashboard-page.component.html',
    styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {
    title = 'shiftReport';

    constructor(private router: Router,
                private route: ActivatedRoute,
                private authService: AuthenticationService,
                private location: Location) {
        // listening to route changes of child components in order to set the current title of dashboard
        this.router.events.pipe(
            filter(event => event instanceof ChildActivationEnd)
        ).subscribe(() => {
            this.title = this.route.snapshot.firstChild.data.title;
        });
    }

    logout(): void {
        this.authService.clearAuthData();
        this.router.navigateByUrl('/login');
    }

    back(): void {
        this.location.back();
    }
}
