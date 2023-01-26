import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfilService } from '../services/profile/profil.service';
import { StructureService } from '../services/structure/structure.service';

@Component({
  selector: 'app-structurehome',
  templateUrl: './structurehome.page.html',
  styleUrls: ['./structurehome.page.scss'],
})
export class StructurehomePage implements OnInit {
  id: any;
  idstruct:any;
  cat: string = "Accueil"; // default button
  structurparid: any;
  profiles: any;
  avisFinancement:any;
  annonces:any;

  constructor(private router: Router, private route: ActivatedRoute, private structure: StructureService, private profile: ProfilService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.idstruct=this.id;
    console.log(this.id);
    this.structure.afficherstructureparid(this.id).subscribe(data => {
      this.structurparid = data;
      console.log(this.structurparid);
    })
    this.profile.afficherprofil(this.id).subscribe(data => {
      this.profiles = data;
      console.log(this.profiles)
    })
    this.structure.afficheravisparidstructure(this.idstruct).subscribe(data=>{
      this.avisFinancement=data;
      console.log(this.avisFinancement);
    })

    this.structure.afficherannonceparidstructure(this.idstruct).subscribe(data=>{
      this.annonces=data;
      console.log(this.annonces);
    })

  }
}