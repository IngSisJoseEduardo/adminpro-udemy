import { Component, OnInit } from '@angular/core';
declare function init_plugins(); // funcion declarada en archivo externo de angular a nivel de index
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
