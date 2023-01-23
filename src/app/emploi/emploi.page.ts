import { Component, OnInit } from '@angular/core';
import { ProfilService } from '../services/profile/profil.service';
import { StorageServicesService } from '../services/storageService/storage-services.service';

@Component({
  selector: 'app-emploi',
  templateUrl: './emploi.page.html',
  styleUrls: ['./emploi.page.scss'],
})
export class EmploiPage implements OnInit {
  cat: string = "Accueil"; // default button
  id_structure: any;
  profiles: any;
  roles:any;
  role:any;
  isLoggedIn=false;
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
