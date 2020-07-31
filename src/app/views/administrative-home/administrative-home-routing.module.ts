import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrativeHomeComponent } from './administrative-home.component';

const routes: Routes = [{ path: '', component: AdministrativeHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrativeHomeRoutingModule { }
