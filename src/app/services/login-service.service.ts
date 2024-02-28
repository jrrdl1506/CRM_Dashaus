import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private credencialesSubject : Subject<any> = new Subject<any>();
  credenciales$:Observable<any> = this.credencialesSubject.asObservable();

  constructor() { }

  // LOGIN
  saveCredentials(_username: string, _password: string,_type:string): void {
    var credential = {
      username:_username,
      password:_password,
      type:_type
    }
    this.credencialesSubject.next(credential);
    var cred = JSON.stringify(credential);
    localStorage.setItem('credential',cred);
  
  }

  // LOGOUT
  clearCredentials(): void {
    localStorage.removeItem('credential');
  }

  
  getUsername(): any | null {
    return localStorage.getItem('credential');
  }

  getPassword(): any | null {
    return localStorage.getItem('credential');
  }
}
