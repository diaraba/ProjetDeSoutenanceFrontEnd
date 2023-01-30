import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const AUTH_API = 'http://localhost:8080/api/profileutilisateurs/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ModifierprofilService {
  constructor(private http: HttpClient) { }

  modifierProfil(nom: any, prenom: any, genre: any, numero: any, situation: any,activites:any, id_profile: any): Observable<any> {
    console.log(nom);
    let data = new FormData();
    data.append('nom', nom);
    data.append('prenom', prenom);
    data.append('numero', numero);
    data.append('situation', situation);
    return this.http.put(
      AUTH_API + `modifierProfileUtilisateur/${id_profile}`, data
    );
  }


  modifierProfiletat(notif: any, idprofile: any): Observable<any> {
    let data = new FormData();
    data.append('etat', notif);
    return this.http.put(
      AUTH_API + `modifierProfileUtilisateur/${idprofile}`, data
    );
  }

  creerProfil(nom: any, prenom: any, genre: any, numero: any, situation: any, id_utilisateur: any): Observable<any> {
    return this.http.post(
      AUTH_API + `modifierProfileStructure/${id_utilisateur}`,
      {

      },
      httpOptions
    );
  }

  modifierCompte(activites: any,id_utilisateur: any): Observable<any> {
    console.log(activites);
    // let data = new FormData();
    // data.append('activites', activites);
    return this.http.put(
      `http://localhost:8080/api/auth/modifierUtilisateur/${id_utilisateur}`, {
        activites
      }
    );
  }

  modifierCompteAllContent(nomutilisateur: any, email: any,id_utilisateur: any): Observable<any> {
  
    // let data = new FormData();
    // data.append('activites', activites);
    return this.http.put(
      `http://localhost:8080/api/auth/modifierUtilisateur/${id_utilisateur}`, {
        nomutilisateur,
        email,
      }
    );
  }
}