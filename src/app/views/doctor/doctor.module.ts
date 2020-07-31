import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ToolbarModule } from '../.././components/toolbar/toolbar.module';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [DoctorComponent],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    ToolbarModule,
    MatCardModule

  ]
})
export class DoctorModule { }
