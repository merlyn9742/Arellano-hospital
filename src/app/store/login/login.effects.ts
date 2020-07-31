import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LoginService } from '../../services/login.service';
import { loginSuccessAction, startLoginAction } from './login.actions';
import { map, switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class LoginEffects {

  constructor(private actions$: Actions,
              private loginService: LoginService,
              private router: Router) {
  }

  startLogin$ = createEffect(() => this.actions$.pipe(ofType(startLoginAction),
    switchMap(({ email, password }) => this.loginService.signIn(email, password)
      .pipe(map(user => loginSuccessAction({ user }))))));

  loginSuccess$ = createEffect(() => this.actions$.pipe(ofType(loginSuccessAction),
    tap(user => {
      if(user.user.userRole === 'doctor'){
        this.router.navigate(['/doctor'])
      }

      if(user.user.userRole === 'admin'){
        this.router.navigate(['/administrador-home'])
      }

      if(user.user.userRole === 'recepcionist'){
        this.router.navigate(['/reception-home'])
      }

    })), { dispatch: false });
}
