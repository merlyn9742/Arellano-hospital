import { createReducer, on } from '@ngrx/store';

import { loadingLoginAction, loginFailedAction, loginSuccessAction, startLoginAction } from './login.actions';

export const loginReducer = createReducer({
    loading: false,
    error: ''
  },
  on(startLoginAction, state => ({ ...state, loading: true })),
  on(loadingLoginAction, (state, { loading }) => ({
    ...state,
    loading
  })),
  on(loginFailedAction, (state, { error }) => ({
    ...state,
    error
  })),
  on(loginSuccessAction, state => ({ ...state, loading: false }))
);
