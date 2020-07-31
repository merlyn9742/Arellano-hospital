import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospitalizedPatientsRoutingModule } from './hospitalized-patients-routing.module';
import { HospitalizedPatientsComponent } from './hospitalized-patients.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ToolbarModule } from '../../components/toolbar/toolbar.module';
import {MatDialogModule} from '@angular/material/dialog';
import { DetailPatientHospitalizedModule } from '../../components/dialogs/detail-patient-hospitalized/detail-patient-hospitalized.module';


@NgModule({
  declarations: [HospitalizedPatientsComponent],
  imports: [
    CommonModule,
    HospitalizedPatientsRoutingModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    ToolbarModule,
    DetailPatientHospitalizedModule,
    MatDialogModule
  ],
  exports: []
})
export class HospitalizedPatientsModule { }
