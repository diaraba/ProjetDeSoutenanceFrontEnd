import { Injectable } from '@angular/core';
import {HttpClient ,HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions={
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  register(nomutilisateur:string, email:string, password:string, activites:any): Observable<any>{
    let data = new FormData();
    data.append('nomutilisateur',nomutilisateur);
    data.append('email',email);
    //let activitesString = JSON.stringify(activites);
    data.append('password',password);
    data.append('activites', activites);
    return this.http.post(
      AUTH_API + `creerUtilisateur`,
      {
        nomutilisateur,
        email,
        password,
        activites
      },
      httpOptions
    );
  }


  login(email:string, password:string): Observable<any>{
    return this.http.post(
      AUTH_API + 'signin',
      {
        email,
        password,
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    // return this.http.post(
    //   AUTH_API + 'logout',{},httpOptions
    //   );
    const req = new HttpRequest('POST', AUTH_API + 'signout', {}, httpOptions);
    return this.http.request(req);
  }
}
