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
  structureprive:any=[]
  structurepublic:any=[]
  id:any;

  constructor(private structure: StructureService, private router :Router) { }

  ngOnInit() {
    console.log(this.id);
    setTimeout(()=>{
      this.structure.afficherstructure().subscribe(data => {
        this.structures = data
        this.structureprive=this.structures[0];
        this.structurepublic=this.structures[1];
        console.log(this.structureprive);
        console.log(this.structurepublic);
      })
    },1000)


    
  }
  goToStructurehome(id:Number){
    return this.router.navigate(['structurehome/', id])
  }
  back(): void {
    window.history.back()
  }



}
