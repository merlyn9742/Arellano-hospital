import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesShetRoutingModule } from './expenses-shet-routing.module';
import { ExpensesShetComponent } from './expenses-shet.component';
import { ToolbarModule } from '../../components/toolbar/toolbar.module';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [ExpensesShetComponent],
  imports: [
    CommonModule,
    ExpensesShetRoutingModule,
    ToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule
  ]
})
export class ExpensesShetModule { }
