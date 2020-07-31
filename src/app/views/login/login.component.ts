import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { AppStateInterface } from '../../interfaces/app-state.interface';
import { startLoginAction } from '../../store/login/login.actions';
import { Observable } from 'rxjs';
import { selectLoading } from '../../store/login/login.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  spinner: Observable<boolean>;
  form: FormGroup;

  constructor(formBuilder: FormBuilder,
              private store: Store<AppStateInterface>) {
    this.form = formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.spinner = this.store.select(selectLoading);
  }

  login() {
    const { email, password } = this.form.value;
    this.store.dispatch(startLoginAction({ email, password }));
  }
}
