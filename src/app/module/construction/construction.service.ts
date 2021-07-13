import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Section} from './model/section';
import {SERVER_API_URL} from '../../app.constants';
import {Shift} from './model/shift';
import {map} from 'rxjs/operators';
import {ShiftParticipation} from './model/shift-participation';
import {CompanyEmployee} from './model/company-employee';
import {TunnelRound} from './model/tunnel-round';
import {ActivityType} from './model/activity-type';
import {Activity} from './model/activity';
import {MeasureDefinition} from './model/measure-definition';
import {Measure} from './model/measure';
import {SupportDefinition} from './model/support-definition';

@Injectable()
export class ConstructionService {
    constructor(private http: HttpClient) {

    }

    getSections(): Observable<Section[]> {
        return this.http.get<Section[]>(SERVER_API_URL + /construction.section/);
    }

    getSupportDefinitionsBySection(sectionId: number): Observable<SupportDefinition[]> {
        return this.http.get<SupportDefinition[]>(`${SERVER_API_URL}/construction.tunnel.support.definition/?q=[["section", "=", ${sectionId}]]`)
            .pipe(
                map((res: any[]) => res.map(i => SupportDefinition.fromJson(i)))
            );
    }

    getActivityTypes(): Observable<ActivityType[]> {
        return this.http.get<ActivityType[]>(SERVER_API_URL + /construction.activity.type/);
    }

    createShift(shift: Shift): Observable<any> {
        const obj = Shift.toJson(shift);
        return this.http.post(SERVER_API_URL + /construction.shift/, obj);
    }

    getOpenShifts(sectionId: number): Observable<Shift[]> {
        return this.http.get<Shift[]>(`${SERVER_API_URL}/construction.shift/?q=[["section", "=", ${sectionId}], ["state", "=", "draft"]]`)
            .pipe(
                map((res: any[]) => res.map(i => Shift.fromJson(i)))
            );
    }

    getShift(id: number): Observable<Shift> {
        return this.http.get<Shift>(`${SERVER_API_URL}/construction.shift/${id}/`)
            .pipe(
                map((res) => Shift.fromJson(res))
            );
    }

    getShiftParticipants(shiftId: number): Observable<ShiftParticipation[]> {
        return this.http.get<ShiftParticipation[]>(`${SERVER_API_URL}/construction.shift.participation/?q=[["shift", "=", ${shiftId}]]`)
            .pipe(
                map((res: any[]) => res.map(i => ShiftParticipation.fromJson(i)))
            );
    }

    deleteShiftParticipant(participantId: number): Observable<any> {
        return this.http.delete(SERVER_API_URL + /construction.shift.participation/ + participantId + '/', {
            observe: 'body',
            responseType: 'text'
        });
    }

    addShiftParticipant(participant: ShiftParticipation): Observable<any> {
        return this.http.post(SERVER_API_URL + /construction.shift.participation/, participant);
    }

    getEmployees(): Observable<CompanyEmployee[]> {
        return this.http.get<CompanyEmployee[]>(SERVER_API_URL + /company.employee/)
            .pipe(
                map((res: any[]) => res.map(i => CompanyEmployee.fromJson(i)))
            );
    }

    getTunnelRounds(sectionId: number, supportDefinitionId: number): Observable<TunnelRound[]> {
        return this.http.get<TunnelRound[]>(`${SERVER_API_URL}/construction.tunnel.round/?q=[["section", "=", ${sectionId}], ["support_definition", "=", ${supportDefinitionId}]]`)
            .pipe(
                map((res: any[]) => res.map(i => TunnelRound.fromJson(i)))
            );
    }

    getTunnelRound(id: number): Observable<TunnelRound> {
        return this.http.get<TunnelRound>(`${SERVER_API_URL}/construction.tunnel.round/${id}/`)
            .pipe(
                map((res) => TunnelRound.fromJson(res))
            );
    }

    createTunnelRound(round: TunnelRound): Observable<any> {
        const obj = TunnelRound.toJson(round);
        return this.http.post(SERVER_API_URL + /construction.tunnel.round/, obj);
    }

    editTunnelRound(round: TunnelRound): Observable<any> {
        const obj = TunnelRound.toJson(round);
        return this.http.put(SERVER_API_URL + /construction.tunnel.round/ + round.id + '/', obj, {
            observe: 'body',
            responseType: 'text'
        });
    }

    getActivities(shiftId: number, roundId: number): Observable<Activity[]> {
        return this.http.get<Activity[]>(`${SERVER_API_URL}/construction.activity/?q=[["round", "=", ${roundId}], ["shift", "=", ${shiftId}]]`)
            .pipe(
                map((res: any[]) => res.map(i => Activity.fromJson(i)))
            );
    }

    createActivity(activity: Activity): Observable<any> {
        const obj = Activity.toJson(activity);
        return this.http.post(SERVER_API_URL + /construction.activity/, obj);
    }

    editActivity(activity: Activity): Observable<any> {
        const obj = Activity.toJson(activity);
        return this.http.put(SERVER_API_URL + /construction.activity/ + activity.id + '/', obj, {
            observe: 'body',
            responseType: 'text'
        });
    }

    deleteActivity(activityId: number): Observable<any> {
        return this.http.delete(SERVER_API_URL + /construction.activity/ + activityId + '/', {
            observe: 'body',
            responseType: 'text'
        });
    }

    getMeasureDefinitions(): Observable<MeasureDefinition[]> {
        return this.http.get<MeasureDefinition[]>(`${SERVER_API_URL}/construction.tunnel.measure.definition/`)
            .pipe(
                map((res: any[]) => res.map(i => MeasureDefinition.fromJson(i)))
            );
    }

    getMeasuresByActivity(activityId: number): Observable<Measure[]> {
        return this.http.get<Measure[]>(`${SERVER_API_URL}/construction.tunnel.measure/?q=[["activity", "=", ${activityId}]]`)
            .pipe(
                map((res: any[]) => res.map(i => Measure.fromJson(i)))
            );
    }

    getMeasuresByRound(roundId: number): Observable<Measure[]> {
        return this.http.get<Measure[]>(`${SERVER_API_URL}/construction.tunnel.measure/?q=[["round", "=", ${roundId}]]`)
            .pipe(
                map((res: any[]) => res.map(i => Measure.fromJson(i)))
            );
    }

    deleteMeasure(measureId: number): Observable<any> {
        return this.http.delete(SERVER_API_URL + /construction.tunnel.measure/ + measureId + '/', {
            observe: 'body',
            responseType: 'text'
        });
    }

    deleteRound(roundId: number): Observable<any> {
        return this.http.delete(SERVER_API_URL + /construction.tunnel.round/ + roundId + '/', {
            observe: 'body',
            responseType: 'text'
        });
    }

    createMeasure(measure: Measure): Observable<any> {
        const obj = Measure.toJson(measure);
        return this.http.post(SERVER_API_URL + /construction.tunnel.measure/, obj);
    }
}
