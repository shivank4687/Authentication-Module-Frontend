import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { UserState } from './user.state';

export const selectUserState = (state: AppState) => state.user;

export const selectUser = createSelector(selectUserState, (state) => state.user);
export const selectIsLoggedIn = createSelector(selectUserState, (state) => state.isLoggedIn);
export const selectLoading = createSelector(selectUserState, (state) => state.loading);
export const selectError = createSelector(selectUserState, (state) => state.error);