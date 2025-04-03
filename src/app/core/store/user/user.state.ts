import { User } from '../../models/user.model';
  export interface UserState {
    user: User | null;
    isLoggedIn: boolean;
    loading: boolean;
    error: string | null;
  }
  
  export const initialUserState: UserState = {
    user: null,
    isLoggedIn: false,
    loading: false,
    error: null,
  };