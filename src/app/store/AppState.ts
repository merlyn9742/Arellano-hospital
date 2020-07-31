import { ActionReducerMap } from '@ngrx/store';

import { AppStateInterface } from '../interfaces/app-state.interface';

import { loginReducer } from './login/login.reducer';
import { securityReducer } from './security/security.reducer';
import { receptionReducer } from './reception/reception.reducer';
import { patientsReducer } from './segurity-patients/segurity.patients';
import { _adminReducer } from './administration/administration.reducer';

export const AppState: ActionReducerMap<AppStateInterface> = {
  loginScreen: loginReducer,
  securityData: securityReducer,
  loadAddPatient: receptionReducer,
  patientData: patientsReducer,
  adminData: _adminReducer
};
