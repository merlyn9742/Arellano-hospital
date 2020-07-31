import { createAction, props } from '@ngrx/store';
import { UserInterface } from '../../interfaces/user.interface';

const COMPONENT = '[Login component] ';
const START_LOGIN_ACTION = COMPONENT + 'Start Login';
const LOADING = COMPONENT + 'Loading Login';
const LOGIN_SUCCESS = COMPONENT + 'Login success';
const LOGIN_FAILED = COMPONENT + 'Login failed';

export const startLoginAction = createAction(START_LOGIN_ACTION, props<{ email: string, password: string }>());
export const loginFailedAction = createAction(LOGIN_FAILED, props<{ error: string }>());
export const loadingLoginAction = createAction(LOADING, props<{ loading: boolean }>());
export const loginSuccessAction = createAction(LOGIN_SUCCESS, props<{ user: UserInterface }>());
