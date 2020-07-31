import { createReducer, on } from '@ngrx/store';

import { PatientInterface } from 'src/app/interfaces/reception.interface';
import { fetchAllPatientsAction, AddUniquePatientToArrayAction } from '../reception/reception.actions';



  const allPatients: PatientInterface[] = [];

  const uniquePatient: PatientInterface = {
    name: '',
    lastName: '',
    assignedTo: {
      creationDate: null,
      displayName: '',
      email: '',
      firebaseUserId: '',
      role: '',
    },
    billing: {
      billingId: -1,
      billingItems: [],
      total: 0
    },
    creationDate: null,
    patientId: 0,
    severity: '',
    status: '',
    total: 0,
    turn: 0
  }
  export const patientsReducer = createReducer(
    {
      allPatients,
      uniquePatient
    },
    on(fetchAllPatientsAction, (state, {allPatients}) => ({
      ...state, 
      allPatients
    })),
    on(AddUniquePatientToArrayAction, (state, {patientUnique}) => ({
      ...state,
        allPatients: [...state.allPatients, patientUnique]
    }))
    );
