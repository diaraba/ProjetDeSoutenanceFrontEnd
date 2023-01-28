import { Component, OnInit } from '@angular/core';
import { StorageServicesService } from '../services/storageService/storage-services.service';
import { StructureService } from '../services/structure/structure.service';

@Component({
  selector: 'app-abonnee',
  templateUrl: './abonnee.page.html',
  styleUrls: ['./abonnee.page.scss'],
})
export class AbonneePage implements OnInit {
  roles: any;
  id_user: any;
  structuressuivi: any = [];
  userfollower: any = [];
  constructor(private storageService: StorageServicesService, private structure: StructureService) { }

  ngOnInit() {
    this.roles = this.storageService.getUser().roles;
    console.log(this.roles);

    if (this.roles[0] == "ROLE_PROJET" || this.roles[0] == "ROLE_EMPLOI" || this.roles[0] == "ROLE_STRUCTURE") {
      this.id_user =  this.storageService.getUser().id;
      console.log(this.id_user);
    }

    // this.id_user =  this.storageService.getUser().id;

    this.structure.afficherstructuresuiviparuser(this.id_user).subscribe(data=>{
      this.structuressuivi=data;
      console.log(this.structuressuivi);
    })

    this.structure.afficherusersquifollowstructure(this.id_user).subscribe(data=>{
      this.userfollower=data;
      console.log(this.userfollower);
    })
  }
  

}
