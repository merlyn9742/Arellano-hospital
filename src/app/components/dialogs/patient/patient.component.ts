import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/interfaces/app-state.interface';
import { AddPatientsToConsultationAction } from '../../../store/reception/reception.actions';
import { FormControl } from '@angular/forms';
import { PatientService } from '../../../services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
    name = new FormControl('');
    lastnames = new FormControl('');
    severity = new FormControl('');

  token: string;
  constructor(private store: Store<AppStateInterface>, private patientService: PatientService) { }

  ngOnInit() {

    this.store.select('securityData').subscribe(token => {
      this.token = token.idToken

    });

  }

  addPatient(){
     this.store.dispatch(AddPatientsToConsultationAction({patientData: {name: this.name.value, lastName: this.lastnames.value, severity: this.severity.value}, token: this.token}))
      
  }

}
