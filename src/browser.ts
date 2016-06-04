import 'angular2-universal/polyfills';
import 'rxjs/Rx';
import {PLATFORM_DIRECTIVES} from '@angular/core'

//angular
import {bootstrap, enableProdMode, BROWSER_ROUTER_PROVIDERS, BROWSER_HTTP_PROVIDERS} from 'angular2-universal';


import { provideStore } from '@ngrx/store';
import { provideRouter } from '@ngrx/router';


import { EpublicContainer, core_ui, CORE_PROVIDERS } from './app/core';
import { MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS } from './platform/browser/material';
import { BROWSER_PLATFORM_DIRECTIVES } from './platform/browser/browser.providers';


bootstrap(EpublicContainer, [
  ...BROWSER_ROUTER_PROVIDERS,
  ...BROWSER_HTTP_PROVIDERS,
  ...CORE_PROVIDERS,
  ... MATERIAL_PROVIDERS,
  {provide: PLATFORM_DIRECTIVES, multi: true, useValue: BROWSER_PLATFORM_DIRECTIVES},

  provideStore({core_ui}),

]);
