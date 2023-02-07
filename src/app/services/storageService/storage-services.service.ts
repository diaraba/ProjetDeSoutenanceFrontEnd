import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user'
const MESID = 'mesid'

@Injectable({
  providedIn: 'root'
})
export class StorageServicesService {

  constructor() { }

  
  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    
    return {};
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }






  public saveIdActuels(mesaidVenus:any): void {
    window.sessionStorage.removeItem(MESID);
    window.sessionStorage.setItem(MESID, JSON.stringify(mesaidVenus));
  }

  public getIdActuels(): any {
    const mesiDARetourner = window.sessionStorage.getItem(MESID);
    if (mesiDARetourner) {
      return JSON.parse(mesiDARetourner);
    }
  }


}
