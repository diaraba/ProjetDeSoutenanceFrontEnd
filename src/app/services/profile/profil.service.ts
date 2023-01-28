import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const AUTH_API = 'http://localhost:8080/api/';

const httpOptions={
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private http:HttpClient) { }  
  afficherprofil(id_structure:any):Observable<any>{
    return this.http.get(AUTH_API + `profilestructure/afficherprofil/${id_structure}`);
  }

  afficherprofilutilisateur(id_user:any):Observable<any>{
    return this.http.get(AUTH_API + `profileutilisateurs/afficherprofile/${id_user}`);
  }



}
