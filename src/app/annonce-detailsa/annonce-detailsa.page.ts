import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StructureService } from '../services/structure/structure.service';

@Component({
  selector: 'app-annonce-detailsa',
  templateUrl: './annonce-detailsa.page.html',
  styleUrls: ['./annonce-detailsa.page.scss'],
})
export class AnnonceDetailsaPage implements OnInit {
id:any;
annonce:any;
titre:any;
contenu:any;
date:any;
objet:any;
image:any;

public host = environment.host;
public picture = `${this.host}image/`
  constructor(private route: ActivatedRoute, private structure: StructureService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.structure.afficherannonceparid(this.id).subscribe(data=>{
      this.annonce=data
      this.titre=this.annonce.titre;
      this.contenu=this.annonce.contenu;
      this.objet=this.annonce.objet;
      this.date=this.annonce.date;
      this.image=this.annonce.image;
      console.log(this.annonce);
    })
  }

}
