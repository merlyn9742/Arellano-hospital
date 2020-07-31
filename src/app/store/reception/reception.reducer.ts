import { createReducer, on } from '@ngrx/store';
import * as fromReceptionActions from './reception.actions';

export const receptionReducer = createReducer(
    {
        loading: false,
        error: ''
    },
    on(fromReceptionActions.LoadingActionInReceptionAction, (state, {loading}) => ({
        ...state,
        loading
    })),
    on(fromReceptionActions.LoadedActionInReceptionAction, (state, {loading}) => ({
        ...state,
        loading
    })),
    on(fromReceptionActions.errorAddedPatientToConsultationAction, (state, {error}) => ({
        ...state,
        error
        
    }))
);