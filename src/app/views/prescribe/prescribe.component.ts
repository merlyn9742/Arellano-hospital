import { Component, OnInit } from '@angular/core';
import { AddMedicationService } from '../../services/add-medication.service';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/interfaces/app-state.interface';
import { GetAllMetication } from 'src/app/interfaces/administrativeInterface';

/**
 * export interface GetAllMetication {
    chargeableId: number,
    unitCost: number,
    name: string,
    description: string,
    creationDate: any
}

 * 
 */



@Component({
  selector: 'app-prescribe',
  templateUrl: './prescribe.component.html',
  styleUrls: ['./prescribe.component.scss']
})
export class PrescribeComponent implements OnInit {
  token: string;
  displayedColumns: string[] = ['unitCost', 'name', 'buttons'];
  private dataSource: GetAllMetication;

  constructor(
    private serviceMedication: AddMedicationService,
    private store: Store<AppStateInterface>,) { }

  ngOnInit() {

    this.store.select('securityData').subscribe(data => {
      this.token = data.idToken;
   });

    this.serviceMedication.getAllMedicationService(this.token)
    .subscribe(medications =>  this.dataSource = medications);
  }

}
