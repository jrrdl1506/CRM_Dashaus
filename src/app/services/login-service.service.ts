import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private credencialesSubject : Subject<any> = new Subject<any>();
  credenciales$:Observable<any> = this.credencialesSubject.asObservable();

  constructor() {
    this.checkLocalStorage();
   }

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

  
  getCredentials(): any | null {
    var json = localStorage.getItem('credential');
    if(json)
    return JSON.parse(json);
  else
    return null;
  }


  private checkLocalStorage(): void {
    const storedCredential = localStorage.getItem('credential');
    if (storedCredential) {
     
      const credential = JSON.parse(storedCredential);
      this.credencialesSubject.next(credential);
    }
  }
}
