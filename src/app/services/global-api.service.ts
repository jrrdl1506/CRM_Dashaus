import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalApiService {
  private apiUrl: string = 'localhost:4000/dasHaus';
  constructor() { }

  getApiURL(){
    return this.apiUrl;
  }

  
}
