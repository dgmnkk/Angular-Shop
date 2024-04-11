import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch, withInterceptors} from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth} from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBqJrgQ0SIePulNx8WnZVxHGqeeUcd1qB0",
  authDomain: "shop-app-dgmnkk.firebaseapp.com",
  projectId: "shop-app-dgmnkk",
  storageBucket: "shop-app-dgmnkk.appspot.com",
  messagingSenderId: "174444024838",
  appId: "1:174444024838:web:af937ef8ac7e6f1e0edf87"
};
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    importProvidersFrom([
      provideFirebaseApp(()=> initializeApp(firebaseConfig)),
      provideAuth(() => getAuth())
    ]),
  ]
};
