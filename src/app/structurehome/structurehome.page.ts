import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { NotifService } from '../services/notification/notif.service';
import { ProfilService } from '../services/profile/profil.service';
import { StorageServicesService } from '../services/storageService/storage-services.service';
import { StructureService } from '../services/structure/structure.service';
import { NotificationComponent } from '../notification/notification.component';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-structurehome',
  templateUrl: './structurehome.page.html',
  styleUrls: ['./structurehome.page.scss'],
})
export class StructurehomePage implements OnInit {
//    annonc = {
//       contenu:"",
//       date:"",
//       image:"",
//       objet: ""
//   }
//   profil = {
//     contenu:"",
//     date:"",
//     image:"",
//     objet: ""
// }

//   annonce = [this.annonc];


  id: any;
  idstruct: any;
  iduser: any;
  cat: string = "Accueil"; // default button
  structurparid: any;
  activites!:any;
  profiles!: any;
  image:any;
  avis: any;
  avisFinancement: any = [];
  avisRecruitement: any = [];
  annonces!: any;
  subscribed = false;
  showNotif: any;
  notif: any;
  notifs: any;
  showProjet = false;
  showEmploi = false;
  roles: any;
  showabonnement = false;
  showabonne = false;
  showall = false;
  alias: any;
  description: any;
  slogan: any;
  localisation: any;
  public host = environment.host;
  public picture = `${this.host}image/`

  constructor(private router: Router, private route: ActivatedRoute, private structure: StructureService, private profile: ProfilService, private storageService: StorageServicesService, private popNotif: PopoverController, private authService: AuthenticationService, private routes: Router, private notifinf: NotifService) { }


  async openNotif() {
    const popup = await this.popNotif.create({
      component: NotificationComponent,
    });
    popup.present();

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.idstruct = this.id;
    console.log(this.id);
    this.iduser = this.storageService.getUser().id;
    this.structure.afficherstructureparid(this.id).subscribe(data => {
      this.structurparid = data;
      this.activites=this.structurparid.activites
      this.alias = this.structurparid.alias;
      console.log(this.structurparid);
    })
    this.profile.afficherprofil(this.id).subscribe(data => {
      this.profiles = data;
      this.image=this.profiles.image;
      this.description=this.profiles.description;
      this.slogan=this.profiles.slogan;
      this.localisation=this.profiles.localisation;
      console.log(this.profiles)
    })
    this.structure.afficheravisparidstructure(this.idstruct).subscribe(data => {
      this.avis = data;
      console.log(this.avis)
      for (let avisoption of this.avis) {
        if (avisoption.typeOffre.nom == "FINANCEMENT") {
          this.avisFinancement.push(avisoption);
        }
        else {
          this.avisRecruitement.push(avisoption);

        }
      }
      console.log(this.avisRecruitement);
    })

    this.structure.afficherannonceparidstructure(this.idstruct).subscribe(data => {
      this.annonces = data;
      console.log(this.annonces);
    })
    setTimeout(() => {
    }, 1);

    this.structure.checkabonner(this.iduser, this.idstruct).subscribe(data => {
      this.subscribed = data
      console.log(this.subscribe);
    })



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

  toggleSubscribe() {
    if (this.storageService.isLoggedIn()) {
      if (this.subscribed) {
        this.unsubscribe();
      } else {
        this.subscribe();
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        heightAuto: false,
        confirmButtonColor: '#C8FCEA',
        confirmButtonText: '<span style="color: black;">OK</span>',
        text: 'Vous devez vous connecter pour pouvoir vous abonner!',
        footer: '<a href="/connexion">Connexion... </a>',
      })
    }
  }



  subscribe() {
    this.structure.sabonner(this.iduser, this.idstruct)
      .subscribe(() => {
        this.subscribed = true;
      });
  }


  unsubscribe() {
    this.structure.desabonner(this.iduser, this.idstruct)
      .subscribe(() => {
        this.subscribed = false;
      });
  }

  notifsCall(): void {
    this.notifinf.getNotiflue(this.iduser).subscribe(data => {
      localStorage.setItem('nombre', data)
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
      console.log(this.notifs.length)
    })
    this.Nombrenotif()
  }
  back(): void {
    window.history.back()
  }

  Nombrenotif() {
    this.notifs = localStorage.getItem('nombre')
    console.log(this.notifs)
    setTimeout(() => {
      this.Nombrenotif()
    }, 1000);
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        this.routes.navigate(['/tabs/accueil']).then(() => {
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


}