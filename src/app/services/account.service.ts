import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { LoginModel, LoginResponseModel, LogoutModel, RegisterModel, UserInterface } from '../account/account';
import { Observable, from } from 'rxjs';
import { Auth, user } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { response } from 'express';
import { formatNumber } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  
  basePath = inject(Auth);
  user$ = user(this.basePath);
  currUser = signal<UserInterface | null | undefined>(undefined);
  register(model: RegisterModel): Observable<void> {
    const promise = createUserWithEmailAndPassword(this.basePath, model.email, model.password).then(response => updateProfile(response.user, {displayName: model.username}));
    return from(promise);
  }

  login(model: LoginModel): Observable<void> {
    const promise = signInWithEmailAndPassword(
      this.basePath, model.email, model.password).then(() => {});
    return from(promise);
  }

  logout(): Observable<void> {
    const promise = signOut(this.basePath);
    return from(promise);
  }

  isAuthenticated(): boolean {
    return user(this.basePath) != null;
  }
}