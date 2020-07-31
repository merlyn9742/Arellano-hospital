import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';

import { ReceptionHomeRoutingModule } from './reception-home-routing.module';
import { ReceptionHomeComponent } from './reception-home.component';

import { PatientModule } from '../../components/dialogs/patient/patient.module';
import { ToolbarModule } from '../../components/toolbar/toolbar.module';

@NgModule({
  declarations: [ReceptionHomeComponent],
  imports: [
    CommonModule,
    ReceptionHomeRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    MatDialogModule,
    PatientModule,
    ToolbarModule,
    ReactiveFormsModule
  ]
})
export class ReceptionHomeModule {
}
