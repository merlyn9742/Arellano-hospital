import { Component, OnInit } from '@angular/core';
import { ReceptionInterface } from 'src/app/interfaces/reception.interface';
import { Router } from '@angular/router';
import { DetailPatientHospitalizedComponent } from 'src/app/components/dialogs/detail-patient-hospitalized/detail-patient-hospitalized.component';
import {MatDialog} from '@angular/material/dialog';

const ELEMENT_DATA: ReceptionInterface[] = [
  { patientId: '1', turn: 20, name: 'Hydrogen', lastName: 'Perez', severity: 'Normal', assignedTo: 'Adrian' }
];

@Component({
  selector: 'app-hospitalized-patients',
  templateUrl: './hospitalized-patients.component.html',
  styleUrls: ['./hospitalized-patients.component.scss']
})
export class HospitalizedPatientsComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog ) { }

  
  displayedColumns: string[] = ['id', 'turno', 'nombres', 'apellidos', 'gravedad', 'pasar', 'cancelar'];
  dataSource = ELEMENT_DATA;

  ngOnInit() {
  }

  returnDoctorMain() {
    this.router.navigate(['doctor']);
    
  }


  openModal() {
    const dialogRef = this.dialog.open(DetailPatientHospitalizedComponent, {
      width: '900px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
}
