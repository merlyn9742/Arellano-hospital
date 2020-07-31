import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';

import { PatientComponent } from 'src/app/components/dialogs/patient/patient.component';

import { ReceptionInterface, PatientInterface } from '../../interfaces/reception.interface';
import { PatientService } from '../../services/patient.service';
import { switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/interfaces/app-state.interface';

import { ReceptionService } from '../../services/reception.service';
import { getAllPatientsAction } from '../../store/reception/reception.actions';

@Component({
  selector: 'app-reception-home',
  templateUrl: './reception-home.component.html',
  styleUrls: ['./reception-home.component.scss']
})
export class ReceptionHomeComponent implements OnInit {

  displayedColumns: string[] = ['name', 'lastName', 'cancelar'];

  dataSource: PatientInterface[];

  form: FormGroup;
  token: string;
  allPatients: PatientInterface[];

  constructor(public dialog: MatDialog, private patientService: PatientService, formBuilder: FormBuilder,  private store: Store<AppStateInterface>, 
    private _serviceReception: ReceptionService) {
    this.form = formBuilder.group({
      q: ''
    });
  }

  ngOnInit() {
      this.store.select('securityData').subscribe(user => {
        this.token = user.idToken;
        console.log(this.token);
        localStorage.setItem("token", this.token);
    });

  
    this.store.dispatch(getAllPatientsAction({token: this.token}));
    
    this.store.select('patientData').subscribe(allPatients => {
      this.dataSource = allPatients.allPatients;
    });

    this.patientService.fetchAllPatients(this.token).subscribe(patients => this.dataSource = patients);
   


    this.form.controls.q.valueChanges
      .pipe(switchMap(q => this.patientService.findPatients(q)));
  }

  registerPatient() {
    console.log('register');
    const dialogRef = this.dialog.open(PatientComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`); 
    });
  }
}
