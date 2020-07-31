import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrativeHomeRoutingModule } from './administrative-home-routing.module';
import { AdministrativeHomeComponent } from './administrative-home.component';
import { ToolbarModule } from '../../components/toolbar/toolbar.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [AdministrativeHomeComponent],
  imports: [
    CommonModule,
    AdministrativeHomeRoutingModule,
    ToolbarModule,
    FlexLayoutModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule
  ]
})
export class AdministrativeHomeModule { }
