import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpensesShetComponent } from './expenses-shet.component';

const routes: Routes = [{ path: '', component: ExpensesShetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensesShetRoutingModule { }
