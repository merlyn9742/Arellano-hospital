import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceptionHomeComponent } from './reception-home.component';

const routes: Routes = [{ path: '', component: ReceptionHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptionHomeRoutingModule { }
