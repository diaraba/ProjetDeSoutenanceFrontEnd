import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ProfilService } from '../services/profile/profil.service';
import { StructureService } from '../services/structure/structure.service';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.page.html',
  styleUrls: ['./structure.page.scss'],
})
export class StructurePage implements OnInit {
  structures: any;
  content: any = []
  structureprive: any = []
  structurepublic: any = []
  structurepriveprofil: any = []
  structurepublicprofil: any = []

  id: any;
  idstructure: any;
  profiles: any;
  public host = environment.host;
  public picture = `${this.host}image/`

  constructor(private structure: StructureService, private profile: ProfilService, private router: Router) { }

  ngOnInit() {
    console.log(this.id);
    //setTimeout(() => {
      this.structure.afficherstructure().subscribe(data => {
        this.structures = data
        this.structureprive = this.structures[0];
        this.structurepublic = this.structures[1];
        console.log(this.structureprive);
        console.log(this.structurepublic);

        for (let structureobjet of this.structureprive) {
          console.log(structureobjet)
          this.idstructure=structureobjet.iduser;
          this.profile.afficherprofil(this.idstructure).subscribe(data => {
            this.profiles = data;
            this.structurepriveprofil=this.profiles;
               
            console.log(this.structurepriveprofil)
          })
        }
        console.log(this.structurepriveprofil)

        // for (let structureobjet of this.structurepublic) {
        //   console.log(structureobjet)
        //   this.idstructure=structureobjet.iduser;
        //   this.profile.afficherprofil(this.idstructure).subscribe(data => {
        //     this.profiles = data;
        //     this.persitance(this.profiles);
        //   })
        // }
      })   

    //}, 1000)



  }
  persitance(objetutils:any){
    this.structurepriveprofil.push(objetutils); 
    console.log(this.structurepriveprofil)
  }
  goToStructurehome(id: Number) {
    return this.router.navigate(['structurehome/', id])
  }
  back(): void {
    window.history.back()
  }



}
