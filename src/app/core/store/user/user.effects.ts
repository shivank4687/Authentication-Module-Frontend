import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { AuthService } from '../../../core/auth/auth.service';
import { login, loginSuccess, loginFailure } from './user.actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions,private authService: AuthService,private router:Router) {
  }

  login$ = createEffect(() =>
    this.actions$.pipe(
      // tap(action => console.log('Effect triggered with action:', action)), // Debugging log
      ofType(login),
      mergeMap((action) =>
        this.authService.login(action.credentials).pipe(
          map((user) => loginSuccess({ user:user.user})),
          catchError((error) => {return of(loginFailure({ error: error.message }))})
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccess), // Trigger on loginSuccess action
        tap(({ user }) => {
          // const role = user.role;
          this.router.navigate(['/']); // Navigate dynamically
        })
      ),
    { dispatch: false } // No need to dispatch an action after navigation
  );
}