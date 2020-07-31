import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

import { ReceptionInterface, PatientInterface } from '../interfaces/reception.interface';


@Injectable()
export class PatientService {

  constructor(private httpClient: HttpClient) {
  }

  Patient(patient: ReceptionInterface): Observable<ReceptionInterface> {
    return this.httpClient.post<ReceptionInterface>(`${environment.api}/patient`, patient);
  }

  fetchAllPatients(token: string): Observable<PatientInterface[]> {
    return this.httpClient.get<PatientInterface[]>(`${environment.api}/patients?token=${token}`);
  }

  fetchNextPatient(token: string, localId: string): Observable<PatientInterface>  {

     return this.httpClient.post<PatientInterface>(`${environment.api}/doctor/${localId}/next-patient?token=${token}`, {});
  }


  findPatients(q?: string): Observable<ReceptionInterface[]> {
    let options = {};
    if (q) {
      options = { params: new HttpParams().append('name', q) };
    }
    return this.httpClient.get<ReceptionInterface[]>(`${environment.api}/patients`, options);
  }
}
