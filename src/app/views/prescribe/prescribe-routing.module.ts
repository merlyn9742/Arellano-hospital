import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrescribeComponent } from './prescribe.component';

const routes: Routes = [{ path: '', component: PrescribeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrescribeRoutingModule { }
