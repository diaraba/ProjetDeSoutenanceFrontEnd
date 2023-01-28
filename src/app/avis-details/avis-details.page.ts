import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StructureService } from '../services/structure/structure.service';

@Component({
  selector: 'app-avis-details',
  templateUrl: './avis-details.page.html',
  styleUrls: ['./avis-details.page.scss'],
})
export class AvisDetailsPage implements OnInit {

  id: any;
  avis: any;
  titre: any;
  description: any;
  date: any;
  cible: any;
  conditions:any;
  constructor(private route: ActivatedRoute, private structure: StructureService) { }


  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.structure.afficheravisoffreparid(this.id).subscribe(data => {
      this.avis = data
      this.titre = this.avis.titre;
      this.description = this.avis.description;
      this.cible = this.avis.cible;
      this.date = this.avis.date;
      this.conditions=this.avis.conditions;
      
      console.log(this.avis);
    })
  }

}
