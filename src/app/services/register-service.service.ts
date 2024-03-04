import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor() { }

  async registerUser(_username: string, _password: string,_type:string): Promise<boolean> {
    var credential = {
      username:_username,
      password:_password,
      type:_type
    }
    
    const apiUrl = 'http://localhost:4000/dasHaus/addUser';
    
    

  try {
      const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(credential),
      });

      if (!response.ok) {
          return false
          
        }

      const responseData = await response.json();
      console.log('usuario registrado:', responseData);
      return true
  } catch (error) {
      console.error('Error al realizar la solicitud:');
      return false
  }
  }

}
