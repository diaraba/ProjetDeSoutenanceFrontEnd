import { Component, OnInit } from '@angular/core';
import { ModifierprofilService } from '../services/profile/modifierprofil.service';
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
  structuresuiviparuser: any;
  toggleValue = false;
  notif: any;
  shownotif: any;

  etat: any

  idprofile: any;
  constructor(private profile: ProfilService, private storageService: StorageServicesService, private structure: StructureService, private profil: ModifierprofilService) { }

  ngOnInit() {
    this.id_user = this.storageService.getUser().id;
    this.roles = this.storageService.getUser().roles;
    console.log(this.roles);

    this.profile.afficherprofilutilisateur(this.id_user).subscribe(data => {
      this.profiles = data
      this.content = this.profiles.utilisateurs
      this.idprofile = this.content.iduser;
      this.notif=this.content.etat;
      console.log(this.profiles);
    })

    if (this.roles[0] == "ROLE_EMPLOI") {
      this.showEmploi = true;
    }
    // this.id_user=1;
    this.structure.afficherstructureparpreference(this.id_user).subscribe(data => {
      this.structures = data;

      console.log(this.structures);
    })

    this.structure.afficherstructuresuiviparuser(this.id_user).subscribe(data => {
      this.structuressuivi = data;

      console.log(this.structuressuivi);
    })
    if (this.notif == true) {
      this.shownotif = true;
    } else {
      this.shownotif = false;
    }
  }

  changeState(): void {
    console.log(this.notif);
    this.profil.modifierProfiletat(this.notif, this.idprofile).subscribe(data=>{
      console.log(this.notif);
     })
  }

  }
