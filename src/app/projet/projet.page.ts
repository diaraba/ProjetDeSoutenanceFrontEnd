import { Component, OnInit } from '@angular/core';
import { ModifierprofilService } from '../services/profile/modifierprofil.service';
import { ProfilService } from '../services/profile/profil.service';
import { StorageServicesService } from '../services/storageService/storage-services.service';
import { StructureService } from '../services/structure/structure.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.page.html',
  styleUrls: ['./projet.page.scss'],
})
export class ProjetPage implements OnInit {
  cat: string = "Accueil"; // default button
  id_structure: any;
  id_user: any;
  profiles: any;
  isLoggedIn = false;
  isLoginFailed = false;
  role:any;
  roles:any;
  content:any;
  showProjet = false;
  structures: any = [];
  structuressuivi: any = [];
  structuresuiviparuser:any;
  notif: any;
  shownotif: any;
  validate!: boolean;
  form: any = {
    email: null,
  };
  notifstate:any;
  idprofile:any;
  constructor(private profile: ProfilService, private storageService: StorageServicesService, private structure: StructureService, private profil: ModifierprofilService,private route:Router) { }

  ngOnInit() {
    this.id_structure = this.storageService.getUser().id;
    this.roles=this.storageService.getUser().roles;
    console.log(this.roles);
    this.profile.afficherprofilutilisateur(this.id_structure).subscribe(data => {
      this.profiles = data
      this.content=this.profiles.utilisateurs
      this.idprofile = this.content.iduser;
      this.notif=this.profiles.etat;
      console.log(this.notif)
      console.log(this.profiles);
    })
    
    // for(this.role of this.roles){
    //   console.log(this.role);
    // }
    // if(this.storageService.isLoggedIn()&& ){
    //   this.isLoggedIn = true;
    // }
    if (this.roles[0] == "ROLE_PROJET") {
      this.showProjet = true;
    
    }

    this.structure.afficherstructureparpreference(this.id_user).subscribe(data=>{
      this.structures=data;
     
      console.log(this.structures);
    })

    this.structure.afficherstructuresuiviparuser(this.id_user).subscribe(data=>{
      this.structuressuivi=data;
      
    
      console.log(this.structuressuivi);
    })

    if (this.notif == true) {
      this.shownotif = true;
      this.notifstate='Recevoir'
    } else {
      this.shownotif = false;
      this.notifstate='Ne pas recevoir'
    }
    console.log(this.notifstate);
  }
  // changeState(): void {
  //   console.log(this.notif);
  //   this.profil.modifierProfiletat(this.notif, this.idprofile).subscribe(data=>{
  //     console.log(this.notif);
  //    })
  // }
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
        heightAuto: false})})
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          heightAuto: false,
          color:'#000000',
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
      this.route.navigate(['/tabs/creerprofile'])
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
