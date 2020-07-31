import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPatientHospitalizedComponent } from './detail-patient-hospitalized.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [DetailPatientHospitalizedComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule
  ],
  entryComponents: [DetailPatientHospitalizedComponent]
})
export class DetailPatientHospitalizedModule { }
