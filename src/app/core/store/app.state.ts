import { UserState } from './user/user.state';


// Define the global AppState interface
export interface AppState {
  user: UserState; // Add other feature states here as needed
}