import { createSelector } from '@ngrx/store';

import { AppStateInterface } from '../../interfaces/app-state.interface';

export const selectSecurityData = (appState: AppStateInterface) => appState.securityData;

export const selectToken = createSelector(selectSecurityData, s1 => s1.idToken);
