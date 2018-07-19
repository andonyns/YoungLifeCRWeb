import { Component, OnInit } from '@angular/core';
import { ComunidadesService, Areas } from './../../services/Comunidades.service';

@Component({
  selector: 'app-donde-estamos',
  templateUrl: './donde-estamos.component.html',
  styleUrls: ['./donde-estamos.component.css']
})
export class DondeEstamosComponent implements OnInit {
  ListaAreas = [];
  AreSeleccionada: Areas = {
    nombre: '',
    ListaComunidades: [],
    img: '',
    LinkFacebook: '',
    CodigoArea: ''
  }
  constructor(public comuService: ComunidadesService) {
    this.ListaAreas = this.comuService.getTodasLasAreas();
   }

  ngOnInit() {
  }

  Seleccionar_Area(Area: Areas) {
    console.log(Area);
   this.AreSeleccionada = Area;
  }

}
