import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PreferenceService } from '../services/preferences/preference.service';
import { ModifierprofilService } from '../services/profile/modifierprofil.service';
import { ProfilService } from '../services/profile/profil.service';
import { StorageServicesService } from '../services/storageService/storage-services.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modifierprofil',
  templateUrl: './modifierprofil.page.html',
  styleUrls: ['./modifierprofil.page.scss'],
})
export class ModifierprofilPage implements OnInit {
  id_utilisateur: any;
  id_profile:any;
  profiles: any;
  content:any;
  roles:any;
  payload:any;
  image:any;
  images:any;
  form: any = {
    nom: null,
    prenom: null,
    genre: null,
    numero: null,
    situation: null,
  };
  public activites: any[] = [];
  public interests: any = [];
  public host=environment.host;
  public picture=`${this.host}image/`;
  constructor(private profile: ProfilService, private storageService: StorageServicesService, private modifprofil:ModifierprofilService, private pref: PreferenceService, private route:Router) { }

  ngOnInit() {
    this.id_utilisateur = this.storageService.getUser().id;
    this.roles=this.storageService.getUser().roles;
    console.log(this.roles);
    this.profile.afficherprofilutilisateur(this.id_utilisateur).subscribe(data => {
      this.profiles = data;
      this.content=this.profiles.utilisateurs;
      this.image=this.profiles.image;
      this.id_profile=this.profiles.idutilisateur;
      console.log(this.id_profile);
      console.log(this.profiles);
    })
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
      situation} = this.form;
      console.log(this.form);
      console.log("bbbbbbbbbbbbbbbbb" +numero+"ddddddddddddddddddddddddddd")
      if(numero==null){
        this.form.numero=" ";
      }
      if(nom==null){
        this.form.nom=" ";
      }
      if(prenom==null){
        this.form.prenom=" ";
      }
      if(genre==null){
        this.form.genre=" ";
      }
      if(situation==null){
        this.form.situation=" ";
      }
      console.log("bbbbbbbbbbbbbbbbb" + this.form.numero+"ddddddddddddddddddddddddddd")
      console.log(this.images);

      this.modifprofil.modifierProfil( this.form.nom, this.form.prenom, this.form.genre,this.form.numero, this.form.situation,this.activites,this.images,this.id_utilisateur).subscribe(data=>{
      this.payload=data
      console.log(this.payload);
      console.log(this.content);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Profil modifier avec succès !',
        showConfirmButton: false,
        heightAuto:false,
        timer: 1500
      })
      this.route.navigate(['/tabs/emploi']).then(() => {
        setTimeout(() => {
          location.reload();
        }, 2000);
      }); 
    })

    // this.modifprofil.modifierCompte( this.activites, this.id_utilisateur).subscribe(data=>{
    //   this.payload=data
    //   console.log(this.payload);
    // })
  }

  chargeImage(event: any){
    this.images = event.target["files"][0]
    console.log(this.images);
  }
}
