import { createSelector } from '@ngrx/store';

import { LoginScreenInterface } from '../../interfaces/login-screen.interface';
import { AppStateInterface } from '../../interfaces/app-state.interface';

export const selectLoginScreen = (appState: AppStateInterface): LoginScreenInterface => appState.loginScreen;

export const selectLoading = createSelector(selectLoginScreen, s1 => s1.loading);

export const selectError = createSelector(selectLoginScreen, s1 => s1.error);
