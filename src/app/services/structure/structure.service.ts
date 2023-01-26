import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:8080/api/utilisateur/';
const AVIS_API='http://localhost:8080/api/avisoffre/';
const ANNONCE_API='http://localhost:8080/api/annonce/';
const httpOptions={
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StructureService {

  constructor(private http:HttpClient) { }
  
  afficherstructure():Observable<any>{
    return this.http.get(AUTH_API + 'afficherAllStructure');
  }

  afficherstructureparid(id:any):Observable<any>{
    return this.http.get(AUTH_API + `afficherstructureparid/${id}`);
  }

  afficheravisparidstructure(idstruct:any):Observable<any>{
    return this.http.get(AVIS_API + `afficheravisparidstructure/${idstruct}`);
  }

  afficherannonceparidstructure(idstruct:any):Observable<any>{
    return this.http.get(ANNONCE_API + `afficherannonceparidstructure/${idstruct}`);
  }
}
