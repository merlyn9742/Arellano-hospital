import { createReducer, on } from '@ngrx/store';

import { loginSuccessAction } from '../login/login.actions';
import { state } from '@angular/animations';
import { UserInterface } from 'src/app/interfaces/user.interface';

export const user: UserInterface = {
  kind: '',
  localId: '',
  email: '',
  displayName: '',
  idToken: '',
  registered: false,
  refreshToken: '',
  expiresIn: '',
  userFirebaseUserId: '',
  userEmail: '',
  userRole: ''
}

export const securityReducer = createReducer(
    user
  ,
  on(loginSuccessAction, (state, {user}) => ({
      ...state,
      ...user
  })));
