import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { NotificationComponent } from '../notification/notification.component';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { NotifService } from '../services/notification/notif.service';
import { ProfilService } from '../services/profile/profil.service';
import { StorageServicesService } from '../services/storageService/storage-services.service';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  showProjet = false;
  showEmploi = false;
  isLoggedIn = false;
  roles: any;
  showabonnement = false;
  showabonne = false;
  showall = false;
  notifs: any;
  notifstate: any;
  objets: any;
  iduser: any;
  badge: any;
  profiles: any;
  notif: any;
  showNotif: any;
  constructor(private popNotif: PopoverController, private authService: AuthenticationService, private storageService: StorageServicesService, private route: Router, private notifinf: NotifService, private profile: ProfilService) { }
  async openNotif() {
    const popup = await this.popNotif.create({
      component: NotificationComponent,
    });
    popup.present();

  }
  ngOnInit() {


    this.roles = this.storageService.getUser().roles;
    this.iduser = this.storageService.getUser().id;
    console.log(this.roles);



    this.notifinf.getNotiflue(this.iduser).subscribe(data => {
      this.notifs = data;
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
      console.log(this.notifs.length);
      this.badge = this.notifstate.length;
      console.log(this.badge);
    })
    //   if (this.storageService.isLoggedIn()) {
    //   this.isLoggedIn = true;
    //   this.roles = this.storageService.getUser().roles;
    // }
    if (this.roles == undefined) {
      this.showProjet = true;
      this.showEmploi = true;
    }
    else if (this.roles[0] == "ROLE_PROJET") {
      this.showProjet = true;
    }
    else {
      this.showEmploi = true;
    }

    if (this.roles == undefined) {
      this.showall = true
    }
    else if (this.roles[0] == "ROLE_PROJET" || this.roles[0] == "ROLE_EMPLOI") {
      this.showabonnement = true;
    }

    else if (this.roles[0] == "ROLE_STRUCTURE") {
      this.showabonne = true;
    }
  }


  back(): void {
    window.history.back()
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        this.route.navigate(['/tabs/accueil']).then(() => {
          setTimeout(() => {
            location.reload();
          }, 100);
        });
      },
      error: err => {
        console.log(err);
      }
    });
  }

  clickEmploi(): void {
   
    if(this.storageService.isLoggedIn()){
      if (this.roles[0] == "ROLE_EMPLOI" ) {
        this.route.navigate(['/tabs/emploi'])
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Vous n\'avez pas le droit d\'accéder à cette page !',
          position: 'center',
          heightAuto: false
        })
      }
    }else{
      this.route.navigate(['/tabs/emploi'])
    }
  }
  clickProjet(): void {
    if(this.storageService.isLoggedIn()){
      if (this.storageService.getUser().roles.includes("ROLE_PROJET")) {
        this.route.navigate(['/tabs/projet'])
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Vous n\'avez pas le droit d\'accéder à cette page !',
          position: 'center',
          heightAuto: false
        })
      }
    }else{
      this.route.navigate(['/tabs/projet'])
    }
  }


}
