import { Component, OnInit } from '@angular/core';
import { PreferenceService } from '../services/preferences/preference.service';
import { ModifierprofilService } from '../services/profile/modifierprofil.service';
import { ProfilService } from '../services/profile/profil.service';
import { StorageServicesService } from '../services/storageService/storage-services.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-creerprofile',
  templateUrl: './creerprofile.page.html',
  styleUrls: ['./creerprofile.page.scss'],
})
export class CreerprofilePage implements OnInit {

  id_utilisateur: any;
  id_profile:any;
  profiles: any;
  content:any;
  roles:any;
  payload:any;
  image:any;
  form: any = {
    nom: null,
    prenom: null,
    genre: null,
    numero: null,
    situation: null,
    etat:null,
  };
  public activites: any[] = [];
  public interests: any = [];
  constructor(private profile: ProfilService, private storageService: StorageServicesService, private modifprofil:ModifierprofilService, private pref: PreferenceService, private route:Router) {

   }

  ngOnInit() {
    this.id_utilisateur = this.storageService.getUser().id;
    this.roles=this.storageService.getUser().roles;
    console.log(this.roles);
    this.pref.getAllPref().subscribe(data => {
      this.interests = data
      console.log(this.interests);

    })
    
  }
  onInterestSelected(interest: any) {
    if (!this.activites.includes(interest)) {
      this.activites.push(interest);
    } else {
      this.activites.splice(this.activites.indexOf(interest), 1);
    }
    console.log(this.activites);
  }

  onSubmit(): void {
    const { 
      nom,
      prenom,
      genre,
      numero,
      situation,
      etat} = this.form;
      if(this.image==null){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Vous n\'avez pas choisi d\'image !',
          position:'center',
          heightAuto:false

        })
      }

      console.log(this.form);
      console.log(this.image)
      this.modifprofil.creerProfil( nom, prenom, genre, numero, situation, etat, this.id_utilisateur, this.image).subscribe(data=>{
      this.payload=data
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Profil créer avec succès !',
        showConfirmButton: false,
        heightAuto:false,
        timer: 1500
      })
      if(this.roles[0] == "ROLE_PROJET"){
        this.route.navigate(['/tabs/projet']).then(() => {
          setTimeout(() => {
            location.reload();
          }, 1);
        });
      }else{
        this.route.navigate(['/tabs/emploi']).then(() => {
          setTimeout(() => {
            location.reload();
          }, 1);
        });
      }
      
      console.log(this.payload);
      this.ngOnInit();
    })
  } 
  
  chargeImage(event: any){
    this.image = event.target["files"][0]
    console.log(this.image);
  }
}
