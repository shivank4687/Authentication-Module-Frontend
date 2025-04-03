import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess, loginFailure, logout } from './user.actions';
import { UserState, initialUserState } from './user.state';

export const userReducer = createReducer(
  initialUserState,
  on(login, (state) => {return ({ ...state, loading: true, error: null })}),
  on(loginSuccess, (state, { user }) => ({ ...state, user, isLoggedIn: true, loading: false })),
  on(loginFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(logout, (state) => ({ ...state, user: null, isLoggedIn: false }))
);