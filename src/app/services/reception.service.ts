import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/user.interface';
import { environment } from '../../environments/environment';
import { RegisterUserInterface, PatientInterface } from '../interfaces/reception.interface';

@Injectable({
  providedIn: 'root'
})
export class ReceptionService {

  baseUrl = `${environment.api}`;

  constructor(private httpClient: HttpClient) {}

registerPatient(name: string, lastName: string, severity: string, token: string): Observable<PatientInterface> { 
  console.log('token'+token);
  return this.httpClient.post<PatientInterface>(`${(this.baseUrl)}/patient?token=${(token)}`, {name, lastName, severity});

}

}
