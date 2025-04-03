import { HttpClient } from '@angular/common/http';
import { Injectable,Inject,PLATFORM_ID } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

import {User} from 'src/app/core/models/user.model';
interface AuthResponse {
  access_token: string;
  user: User; // Add more fields if needed
}


@Injectable(
  { providedIn: 'root'}
  )
export class AuthService {

  private apiUrl = 'http://localhost:4000/api/v1/auth'; // Replace with actual API endpoint

  constructor(@Inject(PLATFORM_ID) private platformId: Object,private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, credentials)
    .pipe(
      tap(response => {
        if (response && response.access_token) {
          localStorage.setItem('access_token', response.access_token);
        }
      })
    );
  }

  signup(user:User): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/signup`, user);
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }

  isAuthenticated(): Observable<boolean> {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('access_token');
      return of(!!token); // Return true if token exists, false otherwise
    }
    return of(false);
    // if (!token) {
    //   return of(false); // No token found
    // }

    // try {
    //   const decodedToken: any = jwtDecode(token);
    //   const isTokenValid = decodedToken && decodedToken.exp * 1000 > Date.now(); // Check if token is expired
    //   return of(isTokenValid);
    // } catch (error) {
    //   console.error('Error decoding token:', error);
    //   return of(false); // Invalid token
    // }
    // }
  }
}
