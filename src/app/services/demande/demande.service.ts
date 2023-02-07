import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const DEMANDE_API='http://localhost:8080/api/auth/';
const httpOptions={
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private http: HttpClient) { }

  sendemailfordemande(nom: any, email: any, genre: any, numero: any, contenu: any, objet: any,statut: any,id_user: any, id_structure:any): Observable<any> {
    console.log(nom);
    let data = new FormData();
    data.append('nom', nom);
    data.append('email', email);
    data.append('genre', genre);
    data.append('numero', numero);
    data.append('contenu', contenu);
    data.append('objet', objet);
    data.append('statut', statut);
    
    return this.http.post(
      DEMANDE_API + `envoidelademande/${id_user}/${id_structure}`, data
    );
  }
}
