import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import LogRocket from 'logrocket';
LogRocket.init('c6f5iv/ng-layouter');


export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(),
    provideStore(),
    provideRouter(appRoutes),
    provideAnimations(),
  ],
};
