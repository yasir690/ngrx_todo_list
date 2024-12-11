import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideStore(), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), provideEffects(),

provideStoreDevtools({
  maxAge:3,
  logOnly:!isDevMode,
  autoPause:true,
  trace:false,
  traceLimit:75,
  connectInZone:true
})

  ]
};
