import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor( private popNotif: PopoverController) { }
  async openNotif(){
    const popup= await this.popNotif.create({
      component:NotificationComponent,
    });
    popup.present();
   
  }
  ngOnInit() {
  }
  back(): void {
    window.history.back()
  }

}
