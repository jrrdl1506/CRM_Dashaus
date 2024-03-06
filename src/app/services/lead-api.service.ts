import { Injectable } from '@angular/core';
import { GlobalApiService } from './global-api.service';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class LeadApiService {
  

  constructor(private Api:GlobalApiService,private http:HttpClient) { }

  getLeads():Observable<any>{
    return this.http.get(this.Api.getApiURL() + "/getLeads");
  }

  getCategoryLeads():Observable<any>{
    return this.http.get(this.Api.getApiURL() + "/getCategoryLeads");
  }

  addLead(lead:any):Observable<any>{
    console.log(lead,"ADDLEAD");
    return this.http.post(this.Api.getApiURL() + "/addLead",lead);
  }

  getApartadoPorprototipo():Observable<any>{
    return this.http.get(this.Api.getApiURL() + "/getApartadoPorprototipo");
  }

  getApartadoPorCanal():Observable<any>{
    return this.http.get(this.Api.getApiURL() + "/getApartadoPorCanal");
  }

}
