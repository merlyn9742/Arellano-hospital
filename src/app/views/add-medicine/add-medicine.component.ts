import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AddMedicationService } from '../../services/add-medication.service';
import { AppStateInterface } from '../../interfaces/app-state.interface';
import { Store } from '@ngrx/store';
import { addMedicationAction } from '../../store/administration/administration.actions';
import { GetAllMetication } from 'src/app/interfaces/administrativeInterface';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.scss']
})
export class AddMedicineComponent implements OnInit {

  unitCost = new FormControl('');
  name = new FormControl('');
  description = new FormControl('');
  token: string;
  arrayMedication: GetAllMetication[]=[];


  valida: boolean = false;



  constructor(private serviceAddMedication: AddMedicationService, private store:Store<AppStateInterface>) { }

  ngOnInit() {
    this.store.select('securityData').subscribe(data => {
      this.token = data.idToken
      console.log('token' +this.token);
    });

    this.serviceAddMedication.getAllMedicationService(this.token).subscribe(data => console.log(data));

  }

  addMedicine() {
    this.serviceAddMedication.
    addMedicationService(
      this.token, this.unitCost. value, this.name.value, this.description.value
      ).subscribe(data =>{
         this.arrayMedication.push(data);
         this.valida = true;
        });

      this.store.dispatch(addMedicationAction(
        {metication: 
          {name: this.name.value, description: this.description.value, unitCost:this.unitCost.value },
           token: this.token}));
  }
}
