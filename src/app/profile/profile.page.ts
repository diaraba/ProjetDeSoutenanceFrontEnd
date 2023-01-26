import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  activite: any;


  constructor(private profile: ProfilService, private storageService: StorageServicesService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.isLoggedIn = true;
    // this.id_structure = this.storageService.getUser().id;
    // this.roles = this.storageService.getUser().roles;
    // console.log(this.roles);
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



      console.log(this.profiles);
    })
    
  }

}
