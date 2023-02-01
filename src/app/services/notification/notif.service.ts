import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const NOTIF_API='http://localhost:8080/api/notification/';
const httpOptions={
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class NotifService {

  constructor(private http:HttpClient) { }
  getNotiflue(iduser:any):Observable<any>{
    return this.http.get(NOTIF_API +  `notifnonlue/${iduser}`);
  }
}
