import { CommonModule } from '@angular/common';
import { provideState, Store } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AppState } from 'src/app/core/store/app.state';
import { FormValidationMessageComponent } from 'src/app/shared/components';
import { AuthService } from '../../auth.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models';
import { login, selectError, selectIsLoggedIn, selectUser, UserEffects, userReducer, UserState } from 'src/app/core/store';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterModule,FormValidationMessageComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  user$: Observable<User | null>;
  isLoggedIn$: Observable<boolean> ;
  errorMessage$: Observable<string | null>;//this.store$.select(selectError); // Subscribe to the error state

  constructor(private store$:Store<AppState>,private fb: FormBuilder, private authService: AuthService, private router: Router) {
    // this.store$=this.store;
    this.user$=this.store$.select(selectUser);
    this.isLoggedIn$=this.store$.select(selectIsLoggedIn);
    this.errorMessage$=this.store$.select(selectError); // Subscribe to the error state

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
     if (this.loginForm.invalid) return;
    this.store$.dispatch(login({ credentials:this.loginForm.value }));
    
    // this.authService.login(this.loginForm.value).subscribe({
    //   next: () => this.router.navigate(['/dashboard']),
    //   error: err => this.errorMessage = err.error.message || 'Login failed'
    // });
  }
}
