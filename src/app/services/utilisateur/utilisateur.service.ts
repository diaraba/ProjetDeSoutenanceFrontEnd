import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/utilisateur/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http:HttpClient) { }

  afficherutilisateur(id_utilisateur: any): Observable<any> {

    return this.http.get(
      AUTH_API + `afficherutilisateurparid/${id_utilisateur}`, {}
    );
  }
}
