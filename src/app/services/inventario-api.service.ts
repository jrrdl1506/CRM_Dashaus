import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalApiService } from './global-api.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InventarioApiService {

  constructor(private http:HttpClient,private api:GlobalApiService) { }



  addInventory(inv:any):Observable<any>{
    return this.http.post(this.api.getApiURL() + "/addInventario",inv);
  }

  getInventory():Observable<any>{
    return this.http.get(this.api.getApiURL() + "/getInventario");
  }




}
