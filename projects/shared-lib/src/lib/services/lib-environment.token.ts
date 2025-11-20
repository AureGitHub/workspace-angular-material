import { InjectionToken } from '@angular/core';

export const LIB_ENVIRONMENT = new InjectionToken<'dev' | 'prod'>('LIB_ENVIRONMENT');
