import { Component, OnInit } from '@angular/core';
import { ProfilService } from '../services/profile/profil.service';
import { StorageServicesService } from '../services/storageService/storage-services.service';
import { StructureService } from '../services/structure/structure.service';

@Component({
  selector: 'app-emploi',
  templateUrl: './emploi.page.html',
  styleUrls: ['./emploi.page.scss'],
})
export class EmploiPage implements OnInit {
  cat: string = "Accueil"; // default button
  id_user: any;
  profiles: any;
  roles: any;
  role: any;
  content: any;
  showEmploi = false;
  isLoggedIn = false;
  structures: any = [];
  structuressuivi: any = [];
  structuresuiviparuser:any;
  constructor(private profile: ProfilService, private storageService: StorageServicesService, private structure: StructureService) { }

  ngOnInit() {
    this.id_user = this.storageService.getUser().id;
    this.roles = this.storageService.getUser().roles;
    console.log(this.roles);
    this.profile.afficherprofilutilisateur(this.id_user).subscribe(data => {
      this.profiles = data
      this.content = this.profiles.utilisateurs
      console.log(this.profiles);
    })
    
    if (this.roles[0] == "ROLE_EMPLOI") {
      this.showEmploi = true;
    }
    // this.id_user=1;
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
