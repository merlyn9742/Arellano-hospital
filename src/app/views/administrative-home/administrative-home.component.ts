import { Component, OnInit } from '@angular/core';
import { ReceptionInterface } from 'src/app/interfaces/reception.interface';
import { IndividualExpenceSheetInterface } from 'src/app/interfaces/administrativeInterface';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/interfaces/app-state.interface';
import { AddMedicationService } from '../../services/add-medication.service';


const ELEMENT_DATA: IndividualExpenceSheetInterface[] = [
  { name: 'Merlyn', lastname:'Cilias Arellano', type: 'Consulta', textExpenceSheet: 'Ver Hoja'}
];


@Component({
  selector: 'app-administrative-home',
  templateUrl: './administrative-home.component.html',
  styleUrls: ['./administrative-home.component.scss']
})
export class AdministrativeHomeComponent implements OnInit {

  displayedColumns: string[] = ['name', 'lastname', 'type', 'textExpenceSheet'];
  dataSource = ELEMENT_DATA;
  token: string;

  constructor(private _router: Router, private store: Store<AppStateInterface>, private administrationService: AddMedicationService) { }

  ngOnInit() {

    this.store.select('securityData').subscribe(data => {
      this.token = data.idToken;
   });

   if(this.token){
     localStorage.setItem("token", this.token);
   }

  }

  goIndividualExpenseSheet() {
    this._router.navigate(['hoja-de-gastos-individual']);
  }

  goOverhead() {
    this._router.navigate(['hoja-de-gastos-general']);
  }

  goAddMedication() {
    this._router.navigate(['agregar-medicamento']);
  }


}
