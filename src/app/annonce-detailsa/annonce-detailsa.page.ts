import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { StorageServicesService } from '../services/storageService/storage-services.service';
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
  constructor(
     private route: ActivatedRoute,
     private structure: StructureService,
     private router: Router,
     private storageServicesService: StorageServicesService
     ) { }

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

  checkSatate():void{
    if(this.storageServicesService.isLoggedIn()){
      this.router.navigate(['/tabs/demande']);
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        heightAuto: false,
        confirmButtonColor: '#C8FCEA',
        confirmButtonText: '<span style="color: black;">OK</span>',
        text: 'Vous devez vous connecter pour pouvoir exécuter cette action!',
        footer: '<a href="/connexion">Connexion... </a>',
      })
    }
  }

}
