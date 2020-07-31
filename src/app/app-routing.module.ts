import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'login',

    loadChildren: () =>
      import('./views/login/login.module').then(m => m.LoginModule),
  },

  { path: 'reception-home', loadChildren: () => import('./views/reception-home/reception-home.module').then(m => m.ReceptionHomeModule) },

  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'doctor', loadChildren: () => import('./views/doctor/doctor.module').then(m => m.DoctorModule) },

  { path: 'hospitalized-patients', loadChildren: () => import('./views/hospitalized-patients/hospitalized-patients.module').then(m => m.HospitalizedPatientsModule) },

  { path: 'administrador-home', loadChildren: () => import('./views/administrative-home/administrative-home.module').then(m => m.AdministrativeHomeModule) },

  { path: 'hoja-de-gastos-general', loadChildren: () => import('./views/overhead-sheet/overhead-sheet.module').then(m => m.OverheadSheetModule) },

  { path: 'hoja-de-gastos-individual', loadChildren: () => import('./views/expenses-shet/expenses-shet.module').then(m => m.ExpensesShetModule) },

  { path: 'agregar-medicamento', loadChildren: () => import('./views/add-medicine/add-medicine.module').then(m => m.AddMedicineModule) },

  { path: 'receta', loadChildren: () => import('./views/prescribe/prescribe.module').then(m => m.PrescribeModule) }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
