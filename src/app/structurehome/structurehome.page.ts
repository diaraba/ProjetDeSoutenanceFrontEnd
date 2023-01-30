import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfilService } from '../services/profile/profil.service';
import { StorageServicesService } from '../services/storageService/storage-services.service';
import { StructureService } from '../services/structure/structure.service';

@Component({
  selector: 'app-structurehome',
  templateUrl: './structurehome.page.html',
  styleUrls: ['./structurehome.page.scss'],
})
export class StructurehomePage implements OnInit {
  id: any;
  idstruct: any;
  iduser: any;
  cat: string = "Accueil"; // default button
  structurparid: any;
  profiles: any;
  avisFinancement: any;
  annonces: any;
  subscribed = false;

  constructor(private router: Router, private route: ActivatedRoute, private structure: StructureService, private profile: ProfilService, private storageService: StorageServicesService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.idstruct = this.id;
    console.log(this.id);
    this.iduser = this.storageService.getUser().id;
    this.structure.afficherstructureparid(this.id).subscribe(data => {
      this.structurparid = data;
      console.log(this.structurparid);
    })
    this.profile.afficherprofil(this.id).subscribe(data => {
      this.profiles = data;
      console.log(this.profiles)
    })
    this.structure.afficheravisparidstructure(this.idstruct).subscribe(data => {
      this.avisFinancement = data;
      console.log(this.avisFinancement);
    })

    this.structure.afficherannonceparidstructure(this.idstruct).subscribe(data => {
      this.annonces = data;
      console.log(this.annonces);
    })
    setTimeout(() => {
    }, 1);

    this.structure.checkabonner(this.iduser, this.idstruct).subscribe(data=>{
      this.subscribed=data
      console.log(this.subscribe);
    })

  }

  toggleSubscribe() {
    if (this.subscribed) {
      this.unsubscribe();
    } else {
      this.subscribe();
    }
  }



  subscribe() {
    this.structure.sabonner(this.iduser, this.idstruct)
      .subscribe(() => {
        this.subscribed = true;
      });
  }


  unsubscribe() {
    this.structure.desabonner(this.iduser, this.idstruct)
      .subscribe(() => {
        this.subscribed = false;
      });
  }


}