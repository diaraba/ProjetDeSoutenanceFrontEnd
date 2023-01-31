import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ModifierprofilService } from '../services/profile/modifierprofil.service';
import { StorageServicesService } from '../services/storageService/storage-services.service';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
iduser:any;
notifs:any;
objets:any
titre:any;
contenu:any;
etat:any;
status:any;
idnotif:any;

  constructor(private popNotif: PopoverController, private storageservice: StorageServicesService, private notifofuserlogged: UtilisateurService, private update: ModifierprofilService) { }

  ngOnInit() {
    this.iduser=this.storageservice.getUser().id;

    this.notifofuserlogged.affichernotifpariduser(this.iduser).subscribe(data=>{
      this.objets=data;
      this.notifs=this.objets.notifications
      
      console.log(this.notifs);
    })
  }
  close(){
    this.popNotif.dismiss();
  }
  validate(id:any): void {
    this.etat=true;
   
    this.update.updateNotifetat(this.etat,id).subscribe(data=>{
      console.log(this.notifs);
    })
    console.log("Le clic passe très bien"+ id);
  }



  hide(id:any): void {
    this.status=true;
    this.update.updateNotifstatus(this.status,id).subscribe(data=>{
      console.log(this.notifs);
    })
    console.log("Le clic passe très bien"+ id);
  }



}
