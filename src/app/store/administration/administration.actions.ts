import { createAction, props } from '@ngrx/store';
import { UserInterface } from '../../interfaces/user.interface';
import { AddMedicationRequest, GetAllMetication, AddMedicationResponse } from 'src/app/interfaces/administrativeInterface';

const COMPONENT = '[Administration component] ';
const ADD_MEDICATION = COMPONENT+'Add medication';
const ADDED_MEDICATION = COMPONENT+'Added medication';
const GET_ALL_LIST_MEDICATION = COMPONENT+'Get all medications';
const ERROR_IN_ADMINISTRATION = COMPONENT+'Error in administration'

export const addMedicationAction = createAction(ADD_MEDICATION, props<{metication: AddMedicationRequest, token:string}>());
export const addedMedicationAction = createAction(ADDED_MEDICATION, props<{medicationAdded: AddMedicationResponse}>());
export const getAllListMedicationAction = createAction(GET_ALL_LIST_MEDICATION, props<{listMedication: GetAllMetication[]}>());
export const errorInAdministrationAction = createAction(ERROR_IN_ADMINISTRATION, props<{error: string}>());

