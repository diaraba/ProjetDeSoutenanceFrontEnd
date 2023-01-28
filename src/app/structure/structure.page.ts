import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StructureService } from '../services/structure/structure.service';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.page.html',
  styleUrls: ['./structure.page.scss'],
})
export class StructurePage implements OnInit {
  structures:any;
  content:any=[]
  id:any;

  constructor(private structure: StructureService, private router :Router) { }

  ngOnInit() {
    
    console.log(this.id);
    setTimeout(()=>{
      this.structure.afficherstructure().subscribe(data => {
        this.structures = data
        this.content=this.structures.content
        console.log(this.structures.content[0].iduser);
      })
    },1000)


    
  }
  goToStructurehome(id:Number){
    return this.router.navigate(['structurehome/', id])
  }



}
