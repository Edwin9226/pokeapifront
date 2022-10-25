import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Poke } from '../models/poke.model';
import { AuthenticationService } from './authentication.service';
import { RequestBaseService } from './request-base.service';

const API_URL= `${environment.BASE_URL}/api/poke`;
@Injectable({
  providedIn: 'root'
})
export class PokeService extends RequestBaseService{

  constructor(authorizationservice: AuthenticationService, http: HttpClient) { 
    super(authorizationservice, http);
  }

  savePoke(poke:Poke): Observable<any>{
    return this.http.post(API_URL, poke, {headers:this.getHeaders});
  }

  deletePoke(poke:Poke): Observable<any>{
    return this.http.delete(`${API_URL}/${poke.id}`, {headers:this.getHeaders});
  }

  getAllPokes():Observable<any>{
    return this.http.get(API_URL);
  }

}
