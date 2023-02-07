import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StorageServicesService } from '../services/storageService/storage-services.service';
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
  image:any;
  
  public host = environment.host;
  public picture = `${this.host}image/`
  constructor(
    private route: ActivatedRoute,
    private structure: StructureService,
    private storageServicesService: StorageServicesService
     ) { }


  ngOnInit() {
    this.id = this.route.snapshot.params['idavis'];
    const idstructure = this.route.snapshot.params['id']

    const mesid = {
      "id": this.id,
      "idstructure": idstructure,
    }

    this.storageServicesService.saveIdActuels(mesid);

    alert("je suis id: " + idstructure)
    alert("je suis idavis: " + this.id)
    this.structure.afficheravisoffreparid(this.id).subscribe(data => {
      this.avis = data
      this.titre = this.avis.titre;
      this.description = this.avis.description;
      this.cible = this.avis.cible;
      this.date = this.avis.date;
      this.conditions=this.avis.conditions;
      this.image=this.avis.image;
      
      console.log(this.avis);
    })
  }

}
