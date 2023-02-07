import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ProfilService } from '../services/profile/profil.service';
import { StorageServicesService } from '../services/storageService/storage-services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  id_structure:any;
  profiles:any;
  roles:any;
  isLoggedIn = false;
  id:any;
  description: any;
  status: any;
  numero: any;
  slogan: any;
  email: any;
  nom: any;
  image:any;
  activite: any;
  showupdateprofile=false;
  
  public host = environment.host;
  public picture = `${this.host}image/`


  constructor(private profile: ProfilService, private storageService: StorageServicesService, private route:ActivatedRoute, private backs : Location) { }

  ngOnInit() {
    this.isLoggedIn = false;
    // this.id_structure = this.storageService.getUser().id;
    this.roles = this.storageService.getUser().roles;
    console.log(this.roles);
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.profile.afficherprofil(this.id).subscribe(data => {
      this.profiles = data
      this.description = this.profiles.description
      this.status = this.profiles.structure.statuts[0]
      this.numero = this.profiles.numero
      this.slogan = this.profiles.slogan
      this.activite = this.profiles.activite
      this.email = this.profiles.structure.email
      this.nom = this.profiles.nom
      this.image = this.profiles.image

      if(this.roles[0] == "ROLE_STRUCTURE"){
        this.showupdateprofile=true;
      }

      console.log(this.profiles);
    })

    this.id = this.storageService.getUser().id;
    this.profile.afficherprofil(this.id).subscribe(data => {
      this.profiles = data
      this.description = this.profiles.description
      this.status = this.profiles.structure.statuts[0]
      this.numero = this.profiles.numero
      this.slogan = this.profiles.slogan
      this.activite = this.profiles.activite
      this.email = this.profiles.structure.email
      this.nom = this.profiles.nom

      if(this.roles[0] == "ROLE_STRUCTURE"){
        this.showupdateprofile=true;
      }

      console.log(this.profiles);
    })
    
  }


}
