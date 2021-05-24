import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Section} from './model/section';
import {SERVER_API_URL} from '../../app.constants';

@Injectable()
export class ConstructionService {
    constructor(private http: HttpClient) {

    }

    getSections(): Observable<Section[]> {
        return this.http.get<Section[]>(SERVER_API_URL + /construction.section/);
    }

}
