import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrescribeRoutingModule } from './prescribe-routing.module';
import { PrescribeComponent } from './prescribe.component';
import { ToolbarModule } from '../../components/toolbar/toolbar.module';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [PrescribeComponent],
  imports: [
    CommonModule,
    PrescribeRoutingModule,
    ToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class PrescribeModule { }
