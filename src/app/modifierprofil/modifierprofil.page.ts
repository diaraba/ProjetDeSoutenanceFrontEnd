import { Component, OnInit } from '@angular/core';
import { PreferenceService } from '../services/preferences/preference.service';
import { ModifierprofilService } from '../services/profile/modifierprofil.service';
import { ProfilService } from '../services/profile/profil.service';
import { StorageServicesService } from '../services/storageService/storage-services.service';

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
  form: any = {
    nom: null,
    prenom: null,
    genre: null,
    numero: null,
    situation: null,
  };
  public activites: any[] = [];
  public interests: any = [];
  constructor(private profile: ProfilService, private storageService: StorageServicesService, private modifprofil:ModifierprofilService, private pref: PreferenceService) { }

  ngOnInit() {
    this.id_utilisateur = this.storageService.getUser().id;
    this.roles=this.storageService.getUser().roles;
    console.log(this.roles);
    this.profile.afficherprofilutilisateur(this.id_utilisateur).subscribe(data => {
      this.profiles = data
      this.content=this.profiles.utilisateurs
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
      this.modifprofil.modifierProfil( nom, prenom, genre,numero, situation,this.activites,this.id_profile).subscribe(data=>{
      this.payload=data
      console.log(this.payload);
    })

    this.modifprofil.modifierCompte( this.activites, this.id_utilisateur).subscribe(data=>{
      this.payload=data
      console.log(this.payload);
    })
  }
}
