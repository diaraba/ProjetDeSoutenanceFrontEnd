import { Component, OnInit } from '@angular/core';
import { ModifierprofilService } from '../services/profile/modifierprofil.service';
import { ProfilService } from '../services/profile/profil.service';
import { StorageServicesService } from '../services/storageService/storage-services.service';
import { StructureService } from '../services/structure/structure.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emploi',
  templateUrl: './emploi.page.html',
  styleUrls: ['./emploi.page.scss'],
})
export class EmploiPage implements OnInit {
  cat: string = "Accueil"; // default button
  id_user: any;
  profiles: any;
  roles: any;
  role: any;
  content: any;
  showEmploi = false;
  isLoggedIn = false;
  isLoggedOut=false;
  structures: any = [];
  structuressuivi: any = [];
  structuresuiviparuser: any;
  toggleValue = false;
  notif: any;
  shownotif: any;
  etat: any
  notifstate: any;
  idprofile: any;
  validate!: boolean;
  constructor(private profile: ProfilService, private storageService: StorageServicesService, private structure: StructureService, private profil: ModifierprofilService,private route:Router) { }

  ngOnInit() {
    this.id_user = this.storageService.getUser().id;
    this.roles = this.storageService.getUser().roles;
    console.log(this.roles);

    this.profile.afficherprofilutilisateur(this.id_user).subscribe(data => {
      this.profiles = data
      this.content = this.profiles.utilisateurs
      this.idprofile = this.content.iduser;
      this.notif = this.profiles.etat;
      console.log(this.profiles);
    })

    // if(this.storageService.isLoggedIn()){
    //   this.isLoggedIn=true;
    //   console.log("ça passe xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
    // }else{
    //   this.isLoggedIn=false;
    //   console.log("ça passe xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx11111111 "+this.isLoggedIn)
    // }
    // if(this.roles==undefined){
    //   this.isLoggedOut=true;
    //   console.log("ça passe xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxOut  "+ this.isLoggedOut)
    // }

    if (this.roles[0] == "ROLE_EMPLOI") {
      this.showEmploi = true;
    }
    // this.id_user=1;
    this.structure.afficherstructureparpreference(this.id_user).subscribe(data => {
      this.structures = data;

      console.log(this.structures);
    })

    this.structure.afficherstructuresuiviparuser(this.id_user).subscribe(data => {
      this.structuressuivi = data;

      console.log(this.structuressuivi);
    })
    if (this.notif == true) {
      this.shownotif = true;
      this.notifstate = 'Recevoir'
    } else {
      this.shownotif = false;
      this.notifstate = 'Ne pas recevoir'
    }
  }

  changeState(): void {
    console.log(this.notif);
    if(this.storageService.isLoggedIn()){
    this.profil.modifierProfiletat(this.notif, this.idprofile).subscribe(data => {
      console.log(this.notif);
      this.validate = true
      Swal.fire({
        icon: 'success',
        title: 'Notif modifier avec succes',
        showConfirmButton: false,
        timer: 1500,
        heightAuto: false})
        setTimeout(() => {
          location.reload();
        }, 1600);
          })
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          heightAuto: false,
          confirmButtonColor: '#C8FCEA',
          confirmButtonText: '<span style="color: black;">OK</span>',
          text: 'Vous devez vous connecter pour exécuter certaines actions!',
          footer: '<a href="/login">Connexion... </a>',
        })
      }
  }


  navigateMP():void{
    if(this.storageService.isLoggedIn()){
      this.route.navigate(['/tabs/modifierprofil'])
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        heightAuto: false,
        confirmButtonColor: '#C8FCEA',
        confirmButtonText: '<span style="color: black;">OK</span>',
        text: 'Vous devez vous connecter pour exécuter certaines actions!',
        footer: '<a href="/login">Connexion... </a>',
      })
    }
  }


  navigateMC():void{
    if(this.storageService.isLoggedIn()){
      this.route.navigate(['/tabs/modifiercompte'])
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        heightAuto: false,
        confirmButtonColor: '#C8FCEA',
        confirmButtonText: '<span style="color: black;">OK</span>',
        text: 'Vous devez vous connecter pour exécuter certaines actions!',
        footer: '<a href="/login">Connexion... </a>',
      })
    }
  }


  navigateCACC():void{ 
    console.log(this.profiles);
    if(this.storageService.isLoggedIn()&&this.profiles==undefined){
      this.route.navigate(['/tabs/modifiercompte'])
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        heightAuto: false,
        confirmButtonColor: '#C8FCEA',
        confirmButtonText: '<span style="color: black;">OK</span>',
        text: 'Connectez vous pour exécuter cette action et notez qu\'un profil ne peut être créer q\'une seule fois !',
        footer: '<a href="/login">Connexion... </a>',
      })
    }
  }

}
