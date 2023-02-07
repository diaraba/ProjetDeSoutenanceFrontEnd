import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private toastcontroller: ToastController) { }
  async presentToast(msg:string,type:string) {
    const toast = await this.toastcontroller.create({
      message: msg,
      duration: 2000,
      position:"top",
      color:type
    });
    toast.present();
  }

}
