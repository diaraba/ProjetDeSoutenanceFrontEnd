import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const NOTIF_API='http://localhost:8080/api/utilisateur/';
const NOTIFUPDATE_API='http://localhost:8080/api/notification/';
const httpOptions={
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http:HttpClient) { }

  affichernotifpariduser(iduser:any):Observable<any>{
    return this.http.get(NOTIF_API + `afficherutilisateurparid/${iduser}`);
  }

  // updateNotif(etat:any, idnotif:any): Observable<any> {
  //   let data = new FormData();
  //   data.append('etat', etat);
  //   return this.http.post<any>(
  //     NOTIFUPDATE_API + `notificationvue/${idnotif}`, data
  //   );
  // }

 
 

}
