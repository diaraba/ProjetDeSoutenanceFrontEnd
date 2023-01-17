import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structurehome',
  templateUrl: './structurehome.page.html',
  styleUrls: ['./structurehome.page.scss'],
})
export class StructurehomePage implements OnInit {
  cat: string = "Accueil"; // default button

  constructor() { }

  ngOnInit() {
  }

}
