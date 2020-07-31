import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverheadSheetComponent } from './overhead-sheet.component';

const routes: Routes = [{ path: '', component: OverheadSheetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverheadSheetRoutingModule { }
