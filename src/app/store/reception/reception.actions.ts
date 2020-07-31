import { createAction, props } from '@ngrx/store';
import { UserInterface } from '../../interfaces/user.interface';
import { RegisterUserInterface, PatientInterface } from 'src/app/interfaces/reception.interface';

const COMPONENT = '[Reception component] ';

const FIND_PATIENTS_IN_CONSULTATION = COMPONENT+'Find patient in consultation';
const LOADING_ACTION_RECEPTION = COMPONENT+'Loanding';
const LOADED_ACTION_RECEPTION = COMPONENT+'Loaded';
const FAILED_LOAD_IN_RECEPTION = COMPONENT+'Failed Load In Reception';
const ADD_PATIENT_TO_CONSULTATION = COMPONENT+'Add patient to consultation';
const PATTIENT_ADDED_SUCCESS = COMPONENT+'patient added success';
const ERROR_ADD_PATIENT_TO_CONSULTATION = COMPONENT+'Error added patient to consultation';
const FETCH_ALL_PATIENTS = COMPONENT+"Fetch All Patients";
const GET_ALL_PATIENTS = COMPONENT+"get all patients ";
const ADD_UNIQUE_PATIENT = COMPONENT+"Add unique patient to array";

export const getAllPatientsAction = createAction(GET_ALL_PATIENTS, props<{token: string}>());
export const fetchAllPatientsAction = createAction(FETCH_ALL_PATIENTS, props<{allPatients: PatientInterface[]}>());

export const AddPatientsToConsultationAction = createAction(ADD_PATIENT_TO_CONSULTATION, props<{patientData: RegisterUserInterface, token: string}>());
export const AddUniquePatientToArrayAction = createAction(ADD_UNIQUE_PATIENT, props<{patientUnique: PatientInterface}>());

export const LoadingActionInReceptionAction = createAction(LOADING_ACTION_RECEPTION, props<{loading: boolean}>());
export const LoadedActionInReceptionAction = createAction(LOADED_ACTION_RECEPTION, props<{loading: boolean}>());
export const patientAddedSuccessAction = createAction(PATTIENT_ADDED_SUCCESS);
export const errorAddedPatientToConsultationAction = createAction(ERROR_ADD_PATIENT_TO_CONSULTATION, props<{error: any}>());
