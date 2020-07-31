import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverheadSheetRoutingModule } from './overhead-sheet-routing.module';
import { OverheadSheetComponent } from './overhead-sheet.component';

import { ToolbarModule } from '../../components/toolbar/toolbar.module';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [OverheadSheetComponent],
  imports: [
    CommonModule,
    OverheadSheetRoutingModule,
    ToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule
  ]
})
export class OverheadSheetModule { }
