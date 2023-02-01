import { Injectable } from '@angular/core';

const ABONNEMENT_API='http://localhost:8080/api/auth/';
const httpOptions={
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }
}
