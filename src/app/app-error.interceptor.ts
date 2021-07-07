import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class AppErrorInterceptor implements HttpInterceptor {
    constructor(private snackBar: MatSnackBar, private translateService: TranslateService){
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let handled = false;

        return next.handle(req)
            .pipe(
              retry(1),
              catchError((returnedError) => {
                  let errorMessage = null;

                  if (returnedError.error instanceof ErrorEvent) {
                      errorMessage = `Error: ${returnedError.error.message}`;
                  } else if (returnedError instanceof HttpErrorResponse) {
                      errorMessage = `Error Status ${returnedError.status}: ${returnedError.error.error} - ${returnedError.error.message}`;
                      handled = this.handleServerSideError(returnedError);
                  }

                  console.error(errorMessage ? errorMessage : returnedError);


                  if (!handled) {
                      if (errorMessage) {
                          this.snackBar.open(errorMessage, 'Close');
                          return throwError(errorMessage);
                      } else {
                          const problemMessage = this.translateService.instant('error');
                          const closeMessage = this.translateService.instant('close');
                          this.snackBar.open(problemMessage, closeMessage);
                          return throwError('Unexpected problem occurred');
                      }
                  }
                  return of(returnedError);

              })
            );
    }

    private handleServerSideError(error: HttpErrorResponse): boolean {
        let handled = false;
        console.log(error);
        switch (error.status) {
            case 401:
                this.snackBar.open('You need to be authorized to access this resource', 'Close');
                handled = true;
                break;
        }

        return handled;
    }

}
