import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppStateInterface } from '../interfaces/app-state.interface';
import { select, Store } from '@ngrx/store';
import { selectToken } from '../store/security/security.selectors';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class SecurityInterceptor implements HttpInterceptor {

  constructor(private store: Store<AppStateInterface>) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.pipe(select(selectToken))
      .pipe(mergeMap(token => next.handle(req.url.includes('/auth') ? req : req.clone({
        params: (req.params || new HttpParams()).append('token', token)
      }))));
  }
}
