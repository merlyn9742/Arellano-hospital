import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/user.interface';
import { environment } from '../../environments/environment';
import { RegisterUserInterface, PatientInterface } from '../interfaces/reception.interface';
import { AddMedicationResponse, GetAllMetication } from '../interfaces/administrativeInterface';


@Injectable({
  providedIn: 'root'
})
export class AddMedicationService {

  baseUrl = `${environment.api}`;

  constructor(private httpClient: HttpClient) { }

 
  addMedicationService(token: string, unitCost: number, name: string, description: string): Observable<AddMedicationResponse> {
    return this.httpClient.post<AddMedicationResponse>
      (`${this.baseUrl}/catalogs/chargeable?token=${token}`,
        {unitCost, name, description});
  }

  getAllMedicationService(token: string) {
    return this.httpClient.get<GetAllMetication>(`${this.baseUrl}/catalogs/charges?token=${token}`);
  }

}
