import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor(@Inject(DOCUMENT) private _DOCUMENT) {
    this.cargarAjustes();
  }

  guardarAjustes() {
    // guardando el tema en el local storage
    localStorage.setItem('ajustes', JSON.stringify( this.ajustes ) );
    console.log('guardado en local storage');
  }

  cargarAjustes() {
    if (localStorage.getItem('ajustes')) {
      // cargando de local storage
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      this.aplicarTema( this.ajustes.tema );
      console.log('cagando de local storage');
    } else {
      console.log('usando valores por defecto');
      this.aplicarTema( this.ajustes.tema );

    }
  }

  aplicarTema( tema: string ) {
    const url = `assets/css/colors/${ tema }.css`;
    this._DOCUMENT.getElementById('theme').setAttribute('href', url);

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guardarAjustes();
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
