import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Changepassword } from 'src/app/changepassword/changepassword';


const AUTH_API = 'http://localhost:8080/api/profileutilisateurs/';
const NOTIFUPDATE_API='http://localhost:8080/api/notification/';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ModifierprofilService {
  constructor(private http: HttpClient) { }

  modifierProfil(nom: any, prenom: any, genre: any, numero: any, situation: any,activites:any,images:any, id_utilisateur: any): Observable<any> {
    console.log(nom);
    console.log(images);
    console.log("bbbbbbbbbbbbbbbbb" +numero+"ddddddddddddddddddddddddddd")
    let data = new FormData();
    data.append('nom', nom);
    data.append('prenom', prenom);
    data.append('numero', numero);
    data.append('situation', situation);
    data.append('image', images);
    console.log(images);
    return this.http.put(
      AUTH_API + `modifierProfileUtilisateur/${id_utilisateur}`, data
    );
  }



  creerProfil(nom: any, prenom: any, genre: any, numero: any, situation: any,etat:any, id_utilisateur: any, image:any): Observable<any> {
    console.log(nom); 
    console.log(etat);
    let data = new FormData();
    data.append('nom', nom);
    data.append('prenom', prenom);
    data.append('genre', genre);
    data.append('numero', numero);
    data.append('situation', situation);
    data.append('etat', etat);
    data.append('image', image);
    console.log(image);

    return this.http.post(
      AUTH_API + `creerProfileUtilisateurs/${id_utilisateur}`, data
    );
  }


  modifierProfiletat(notif: any, idprofile: any): Observable<any> {
    let data = new FormData();
    data.append('etat', notif);
    return this.http.put(
      AUTH_API + `modifierProfileUtilisateur/${idprofile}`, data
    );
  }

  modifierProfilStructure(nom: any, prenom: any, genre: any, numero: any, situation: any, id_utilisateur: any): Observable<any> {
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
      `http://localhost:8080/api/auth/modifierUtilisateur/${id_utilisateur}`, {nomutilisateur,email,}
    );
  }


  
  updatepassword(passwordchange:Changepassword): Observable<any> {
  
    // let data = new FormData();
    // data.append('activites', activites);
    return this.http.post('http://localhost:8080/api/utilisateur/updateMotdepasse',passwordchange,{responseType:'text'});
  }



   updateNotifetat(etat:any, idnotif:any): Observable<any> {
    let data = new FormData();
    data.append('etat', etat);
    return this.http.put<any>(
      NOTIFUPDATE_API + `notificationvue/${idnotif}`, data
    );
  }

  updateNotifstatus(status:any, idnotif:any): Observable<any> {
    let data = new FormData();
    data.append('status', status);
    return this.http.put<any>(
      NOTIFUPDATE_API + `notificationvue/${idnotif}`, data
    );
  }
}