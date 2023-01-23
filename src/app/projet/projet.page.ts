import { Component, OnInit } from '@angular/core';
import { ProfilService } from '../services/profile/profil.service';
import { StorageServicesService } from '../services/storageService/storage-services.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.page.html',
  styleUrls: ['./projet.page.scss'],
})
export class ProjetPage implements OnInit {
  cat: string = "Accueil"; // default button
  id_structure: any;
  profiles: any;
  isLoggedIn = false;
  isLoginFailed = false;
  role:any;
  roles:any;
  constructor(private profile: ProfilService, private storageService: StorageServicesService) { }

  ngOnInit() {
    this.id_structure = this.storageService.getUser().id;
    this.roles=this.storageService.getUser().roles;
    console.log(this.roles);
    this.profile.afficherprofilutilisateur(this.id_structure).subscribe(data => {
      this.profiles = data
      console.log(this.profiles);
    })
    
    for(this.role of this.roles){
      console.log(this.role);
    }
    // if(this.storageService.isLoggedIn()&& ){
    //   this.isLoggedIn = true;
    // }
    if(this.role=="ROLE_USER"){
      this.isLoggedIn=true
    }
  }

}
