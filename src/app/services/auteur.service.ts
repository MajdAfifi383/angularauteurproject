import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuteurService {

  private url='http://localhost:8082/rev/auteur';
  constructor(private http:HttpClient) { }
  getList():Observable<any>{
    return this.http.get(`${this.url}`);
  }
  addAuteur(value:any):Observable<any>{
    return this.http.post(`${this.url}`,value);
  }
  deleteAuteur(id:any):Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }

  getAuteur(id:any):Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }
  updateAuteur(id:any,value:any):Observable<any>{
    return this.http.put(`${this.url}/${id}`,value);
  }
  getAuteurNat(nationalite:any):Observable<any>{
    return this.http.get(`${this.url}/find/${nationalite}`);
   }
}
