import { Component, OnInit } from '@angular/core';
import { ReceptionInterface, PatientInterface } from 'src/app/interfaces/reception.interface';
import { Router } from '@angular/router';
import { AppStateInterface } from '../../interfaces/app-state.interface';
import { Store } from '@ngrx/store';
import { PatientService } from '../../services/patient.service';


const ELEMENT_DATA: ReceptionInterface[] = [
  { patientId: '1', turn: 20, name: 'Hydrogen', lastName: 'Perez', severity: 'Normal', assignedTo: 'Adrian' }
];

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  localId: string;
  token: string;
  dataSource: PatientInterface;
  constructor( private router: Router, 
    private store: Store<AppStateInterface>,
    private patientService: PatientService) { }

  displayedColumns: string[] = ['name', 'cancelar'];

 

  ngOnInit() {
    this.store.select('securityData').subscribe(data => {
       this.localId = data.localId;
       this.token = data.idToken;
    });

    if(this.token){
      localStorage.setItem("token", this.token);
  
    }
  }

  nextPatient() {
    this.patientService.fetchNextPatient(this.token, this.localId)
    .subscribe(data => {
      this.dataSource = data;
      console.log(this.dataSource);
    });
  }

  recetar() {
    this.router.navigate(['receta']);
  }

  seePatientsHospitalized() {
    this.router.navigate(['hospitalized-patients']);
  }

}
