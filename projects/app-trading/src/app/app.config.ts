
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { API_BASE_URL, LIB_ENVIRONMENT } from 'shared-lib';
import { environment } from '../environments/environment';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimationsAsync(),
        provideRouter(routes),
        provideHttpClient(),
        { provide: API_BASE_URL, useValue: environment.apiBaseUrl },
        { provide: LIB_ENVIRONMENT, useValue: environment.libEnvironment }
    ]
};
