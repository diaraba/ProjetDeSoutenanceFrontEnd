import { Component, OnInit } from '@angular/core';
import { StorageServicesService } from '../services/storageService/storage-services.service';
import { StructureService } from '../services/structure/structure.service';

@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.page.html',
  styleUrls: ['./abonnement.page.scss'],
})
export class AbonnementPage implements OnInit {
  roles: any;
  id_user: any;
  structuressuivi: any = [];
  showabonnement= false;
  constructor(private storageService: StorageServicesService, private structure: StructureService) { }

  ngOnInit() {
    this.roles = this.storageService.getUser().roles;
    console.log(this.roles);


    if (this.roles[0] == "ROLE_PROJET" || this.roles[0] == "ROLE_EMPLOI") {
      this.showabonnement = true;
    }
    if (this.roles[0] == "ROLE_PROJET" || this.roles[0] == "ROLE_EMPLOI") {
      this.id_user =  this.storageService.getUser().id;
      console.log(this.id_user);

    }
    //this.id_user =  this.storageService.getUser().id;

    this.structure.afficherstructuresuiviparuser(this.id_user).subscribe(data=>{
      this.structuressuivi=data;
      console.log(this.structuressuivi);
    })
  }

}
