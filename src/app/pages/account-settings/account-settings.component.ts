import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public ajustesS: SettingsService ) { }

  ngOnInit() {
    this.checarTema();
  }

  cambiarColor( tema: string, link: any ) {
    this.aplicarCheck( link );
    this.ajustesS.aplicarTema( tema );
  }

  aplicarCheck( link: any ) {
    const selectores: any = document.getElementsByClassName('selector');
    for (const ref of selectores) {
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

  checarTema() {
    const selectores: any = document.getElementsByClassName('selector');
    const tema = this.ajustesS.ajustes.tema;
    for (const ref of selectores) {
      if ( ref.getAttribute('data-theme') === tema ) {
        ref.classList.add('working');
        break;
      }
    }
  }

}
