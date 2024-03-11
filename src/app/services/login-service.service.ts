import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private credencialesSubject: Subject<any> = new Subject<any>();
  credenciales$: Observable<any> = this.credencialesSubject.asObservable();

  constructor() {
    this.checkLocalStorage();
  }

  // LOGIN
  async saveCredentials(_username: string, _password: string, _type: string): Promise<boolean> {
    var credential = {
      username: _username,
      password: _password,
      type: _type
    }

    const apiUrl = 'http://localhost:4000/dasHaus/authUser';

    const jsonData = {
      username: _username,
      password: _password
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      });

      if (!response.ok) {
        return false
        throw new Error(`Error al realizar la solicitud. Estado: ${response.status}`);

      }

      const responseData = await response.json();
      console.log('Datos obtenidos:', responseData);

      const accountId = responseData._id;

      // Guardar el ID de la cuenta en el localStorage
      localStorage.setItem('accountId', accountId);

      return true
    } catch (error) {
      console.error('Error al realizar la solicitud:');
      return false
    }
  }

  // LOGOUT
  clearCredentials(): void {
    localStorage.removeItem('credential');
  }


  getCredentials(): any | null {
    var json = localStorage.getItem('credential');
    if (json)
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
