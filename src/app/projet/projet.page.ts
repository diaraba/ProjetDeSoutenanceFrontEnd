import { Component, OnInit } from '@angular/core';
import { ProfilService } from '../services/profile/profil.service';
import { StorageServicesService } from '../services/storageService/storage-services.service';
import { StructureService } from '../services/structure/structure.service';

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
  constructor(private profile: ProfilService, private storageService: StorageServicesService, private structure: StructureService) { }

  ngOnInit() {
    this.id_structure = this.storageService.getUser().id;
    this.roles=this.storageService.getUser().roles;
    console.log(this.roles);
    this.profile.afficherprofilutilisateur(this.id_structure).subscribe(data => {
      this.profiles = data
      this.content=this.profiles.utilisateurs
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
  }

}
