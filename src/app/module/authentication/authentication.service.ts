import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {SERVER_API_URL} from '../../app.constants';
import {switchMap} from 'rxjs/operators';

export class AuthData {
    token: string;
    userId: number;
    employeeId: number;

    constructor(token: string, userId: number, employeeId: number) {
        this.token = token;
        this.userId = userId;
        this.employeeId = employeeId;
    }
}

interface ILoginData {
    user: string;
    password: string;
}


@Injectable()
export class AuthenticationService {

    constructor(private http: HttpClient) {
    }

    login(loginData: ILoginData): Observable<boolean> {
        return this.http.post(SERVER_API_URL + '/login/', loginData, {responseType: 'text'})
            .pipe(switchMap(token => {
                if (!token) {
                    return of(false);
                }
                this.setAuthData(token);
                return of(true);
            }));
    }

    getAuthData(): AuthData {
        return new AuthData(
            localStorage.getItem('jwt_token'),
            +localStorage.getItem('user_id'),
            +localStorage.getItem('employee_id')
        );
    }

    clearAuthData(): void {
        localStorage.clear();
    }

    private setAuthData(token: any): void {
        let decodedToken = atob(token.split('.')[1]);
        decodedToken = JSON.parse(decodedToken);
        localStorage.setItem('jwt_token', token);
        if (decodedToken['user_id'] != null) {
            localStorage.setItem('user_id', decodedToken['user_id']);
        }
        if (decodedToken['employee_id'] != null) {
            localStorage.setItem('employee_id', decodedToken['employee_id']);
        }
    }

}
