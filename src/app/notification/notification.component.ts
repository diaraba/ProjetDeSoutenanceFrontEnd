import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ModifierprofilService } from '../services/profile/modifierprofil.service';
import { StorageServicesService } from '../services/storageService/storage-services.service';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';
import Swal from 'sweetalert2';
import { ProfilService } from '../services/profile/profil.service';
import { NotifService } from '../services/notification/notif.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  iduser: any;
  notifs: any;
  notifsV: any;
  objets: any
  titre: any;
  contenu: any;
  etat: any;
  status: any;
  idnotif: any;
  profiles: any;
  notif: any;
  notification:any;
  showNotif = false;
  notifactif: any = [];
  notifstate: any = [];


  constructor(private popNotif: PopoverController, private profile: ProfilService, private storageservice: StorageServicesService, private notifofuserlogged: UtilisateurService, private update: ModifierprofilService, private notifinf: NotifService,private route:Router) { }

  ngOnInit() {
    this.iduser = this.storageservice.getUser().id;

    this.notifofuserlogged.affichernotifpariduser(this.iduser).subscribe(data => {
      this.objets = data;
      this.notifs = this.objets.notifications
      this.profile.afficherprofilutilisateur(this.iduser).subscribe(data => {
        this.profiles = data
        this.notif = this.profiles.etat;
        console.log(this.notif);
        if (this.notif == "true") {
          this.showNotif = true;
          console.log(this.showNotif);
        } else {
          this.showNotif = false;
          console.log(this.showNotif);
        }
      })

      for (let index = 0; index < this.notifs.length; index++) {
        // 👇️ bobby 0, hadz 1
        console.log(this.notifs[index], index);

        // if (this.notifs[index].status == "true") {
        //   this.notifactif.push(this.notifs[index])

        //   console.log(this.notifactif);
        // }

        if (this.notifs[index].etat == "false" && this.notifs[index].status == "true") {
          this.notifstate.push(this.notifs[index])
          console.log(this.notifstate.length);
        }
      }


      // console.log(this.notifs);
    })
  }
  close() {
    this.popNotif.dismiss();
  }
  validate(id: any): void {
    this.etat = true;

    Swal.fire({
      icon: 'success',
      title: 'Notif marquer comme lu',
      showConfirmButton: false,
      timer: 1600,
      heightAuto: false
    })
    this.update.updateNotifetat(this.etat, id).subscribe(data => {
      console.log(this.notifs);
      this.notifstate = []  
      this.ngOnInit();
    })  
    setTimeout(() => {
    this.iduser = this.storageservice.getUser().id;
    this.notifinf.getNotiflue(this.iduser).subscribe(data => {
      localStorage.setItem('nombre', data)
      console.log(data);
      this.notifs = data;
    })
    localStorage.setItem('nombre', this.notifs)
    console.log("Le clic passe très bien" + this.notifs);





  
      location.reload();
    }, 1600);

    this.notifinf.affichernotifparid(this.iduser).subscribe(data => {
      console.log(data);
      this.notification = data;
    })
 
  }



  hide(id: any): void {
    this.status = false;
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      heightAuto: false
    }).then((result) => {
      if (result.isConfirmed) {
        this.update.updateNotifstatus(this.status, id).subscribe(data => {
          console.log(this.notifs);
          console.log(this.status);
          this.notifstate = []
          this.ngOnInit();
        })
        Swal.fire({
          icon: 'success',
          title: 'Suppression reussi !',
          showConfirmButton: false,
          timer: 1500,
          heightAuto: false
        })
        this.iduser = this.storageservice.getUser().id;
        this.notifinf.getNotiflue(this.iduser).subscribe(data => {
          localStorage.setItem('nombre', data)

          this.notifs = data;
        })
        localStorage.setItem('nombre', this.notifs)

        console.log("Le clic passe très bien" + this.notifs);
        // Swal.fire(
        //   'Deleted!',
        //   'Your file has been deleted.',
        //   'success',
        // )

      }
    })


    // setTimeout(() => {
    //   location.reload();
    // }, 5000);

  }



}
