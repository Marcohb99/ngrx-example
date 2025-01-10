import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

setupZoneTestEnv();
getTestBed().resetTestEnvironment();
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
  { teardown: { destroyAfterEach: false } },
);

Object.defineProperty(window, 'crypto', {
  value: {
    randomUUID: () => 'bea7a22a-9bf6-44ee-ab6f-f049bc2c8da3',
  },
});

Object.defineProperty(window, 'URL', {
  value: {
    createObjectURL: () => 'http:',
  },
});

Object.defineProperty(window, 'open', {
  value : () => {}
});




