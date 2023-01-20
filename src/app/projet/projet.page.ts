import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.page.html',
  styleUrls: ['./projet.page.scss'],
})
export class ProjetPage implements OnInit {
  cat: string = "Accueil"; // default button
  constructor() { }

  ngOnInit() {
  }

}
