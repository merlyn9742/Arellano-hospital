import { LoginScreenInterface } from './login-screen.interface';
import { UserInterface } from './user.interface';
import { ReceptionScreenInterface, ReducertPatientInterface } from './reception.interface';
import { ReducerAdmin } from './administrativeInterface';

export interface AppStateInterface {
  loginScreen: LoginScreenInterface;
  securityData: UserInterface;
  loadAddPatient: ReceptionScreenInterface;
  patientData: ReducertPatientInterface;
  adminData: ReducerAdmin;
}
