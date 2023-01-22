import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreferenceService {

  constructor(private http:HttpClient) { }
  getAllPref():Observable<any>{
    return this.http.get('http://localhost:8080/api/auth/activites/afficher');
  }
}
