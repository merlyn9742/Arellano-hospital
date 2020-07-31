import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddMedicineRoutingModule } from './add-medicine-routing.module';
import { AddMedicineComponent } from './add-medicine.component';
import { ToolbarModule } from '../../components/toolbar/toolbar.module'
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [AddMedicineComponent],
  imports: [
    CommonModule,
    AddMedicineRoutingModule,
    ToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule
  ]
})
export class AddMedicineModule { }
