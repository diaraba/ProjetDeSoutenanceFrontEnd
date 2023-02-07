import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemandeService } from '../services/demande/demande.service';
import { PreferenceService } from '../services/preferences/preference.service';
import { ModifierprofilService } from '../services/profile/modifierprofil.service';
import { ProfilService } from '../services/profile/profil.service';
import { StorageServicesService } from '../services/storageService/storage-services.service';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.page.html',
  styleUrls: ['./demande.page.scss'],
})
export class DemandePage implements OnInit {

  mesid:any;

  id_utilisateur: any;
  id_profile:any;
  id_structure:any;
  profiles: any;
  content:any;
  roles:any;
  payload:any;
  image:any;
  statut:any;
  id:any;
  form: any = {
    nom: null,
    email: null,
    genre: null,
    numero: null,
    contenu: null,
    objet: null,
  };
  public activites: any[] = [];
  public interests: any = [];

  constructor(
    private profile: ProfilService,
    private route: ActivatedRoute,
    private storageService: StorageServicesService,
    private modifprofil:ModifierprofilService,
    private pref: PreferenceService,
    private senddemande:DemandeService,
    private storageServicesService: StorageServicesService
    ) { }

  ngOnInit() {


this.mesid = this.storageService.getIdActuels();

alert("mes id: " + " " + this.mesid.id +  " " + this.mesid.idstructure)


    this.id_utilisateur = this.storageService.getUser().id;
    this.id = this.route.snapshot.params['id'];
    this.id_structure=this.mesid.idstructure;
    console.log(this.id);
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
      email,
      genre,
      numero,
      contenu,
      objet} = this.form;
      console.log(this.form);
      this.senddemande.sendemailfordemande( nom, email, genre,numero, contenu,objet,this.statut,this.id_utilisateur,this.id_structure).subscribe(data=>{
      this.payload=data
      console.log(this.payload);
    })
  }
}
