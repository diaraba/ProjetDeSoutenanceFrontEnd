import { Component, OnInit } from '@angular/core';
import { StructureService } from '../services/structure/structure.service';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.page.html',
  styleUrls: ['./structure.page.scss'],
})
export class StructurePage implements OnInit {
  structures:any;
  content:any=[]

  constructor(private structure: StructureService) { }

  ngOnInit() {

    setTimeout(()=>{
      this.structure.afficherstructure().subscribe(data => {
        this.structures = data
        this.content=this.structures.content
        console.log(this.structures);
      })
    },1000)
    
  }

}
