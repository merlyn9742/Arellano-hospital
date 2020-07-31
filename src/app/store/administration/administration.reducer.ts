import { createReducer, on } from '@ngrx/store';
import { GetAllMetication } from '../../interfaces/administrativeInterface';
import { getAllListMedicationAction, addedMedicationAction } from '../administration/administration.actions';


 const listMedication: GetAllMetication[] = [];

export const medicationAdded: GetAllMetication = {
    chargeableId: -1,
    unitCost: -1,
    name: '',
    description: '',
    creationDate: null
}

export const _adminReducer = createReducer(
    {
        medicationAdded,
        listMedication
    },
    on(getAllListMedicationAction, (state, {listMedication}) => ({
        ...state,
        listMedication
    })),
    on(addedMedicationAction, (state, {medicationAdded}) => ({
        ...state,
        listMedication:[...state.listMedication, medicationAdded]
    }))
);
