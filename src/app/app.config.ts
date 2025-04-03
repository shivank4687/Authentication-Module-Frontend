import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { UserEffects, userReducer } from './core/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideSharedUI } from './shared/components/ui/shared-ui';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    provideEffects(UserEffects), // Register the user effects
    provideStore({user:userReducer} ), // Register the user reducer
    // ...provideSharedUI,
    provideStoreDevtools({ maxAge: 25, logOnly: false }),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
  ]
  };


