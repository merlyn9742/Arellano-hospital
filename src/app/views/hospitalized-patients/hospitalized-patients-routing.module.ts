import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HospitalizedPatientsComponent } from './hospitalized-patients.component';

const routes: Routes = [{ path: '', component: HospitalizedPatientsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalizedPatientsRoutingModule { }
