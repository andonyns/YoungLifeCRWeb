import { Component, OnInit } from '@angular/core';
import { NgSwitch } from '@angular/common';

@Component({
  selector: 'app-sea-parte',
  templateUrl: './sea-parte.component.html',
  styleUrls: ['./sea-parte.component.css']
})
export class SeaParteComponent implements OnInit {

  Contenido = {
    Opcion : '',
    Titulo : '',
    Texto: ''
  }
  constructor() { }

  ngOnInit() {
  }

OpcionSeaParte(Opcion: string) {
  this.Contenido = {
    Opcion: '',
    Titulo: '',
    Texto: ''
  }
  switch (Opcion) {
    case 'Patrocinador': {
     console.log(Opcion);
      this.Contenido.Opcion = Opcion;
      this.Contenido.Titulo = 'Conviértase en Patrocinador';
      // tslint:disable-next-line:max-line-length
      this.Contenido.Texto = '<h4 class="card-title" > <span class="badge badge-default" > Cuenta en COLONES del BAC San José </span></h4 > \n <p> Nombre: Asociación Young Life(Vida Joven) </p>  <p> Cuenta SINPE: 10200009148143306 </p>  <p> Cédula Jurídica: 3 - 012 - 633078 </p>  <p> Cuenta Corriente: 914814330 </p>';
      break;
    }
    case 'YoMeUno': {
      console.log(Opcion);
      this.Contenido.Opcion = Opcion;
      this.Contenido.Titulo = 'Yo me uno';
      // tslint:disable-next-line:max-line-length
      this.Contenido.Texto =  '<p>Si está interesado en ser uno de nuestros patrocinadores mensuales, escríbanos a <a href="#">npacheco@vidajoven.cr</a> y nos pondremos en contacto con usted.</p>';
      break;
    }
    case 'Voluntario': {
      console.log(Opcion);
      this.Contenido.Opcion = Opcion;
      this.Contenido.Titulo = 'Conviértase en Voluntario';
      // tslint:disable-next-line:max-line-length
      this.Contenido.Texto = '<p>Tenemos muchas oportunidades para que apoye en nuestros campamentos, clubes y otras actividades. Si gusta más información escríbanos a <a href="#">npacheco@vidajoven.cr</a></p>';
      break;
    }
    case 'Alianza': {
      console.log(Opcion);
      this.Contenido.Opcion = Opcion;
      this.Contenido.Titulo = 'Alianzas Corporativas';
       // tslint:disable-next-line:max-line-length
      this.Contenido.Texto = '<p>Vida Joven invita a empresas, corporaciones, fundaciones y ' +
                              'asociaciones a que se unan al trabajo que llevamos a cabo en ' +
                              'pro del bienestar de los adolescentes en Costa Rica.</p> ' +
                              '<p>Lo pueden hacer a través de voluntariado o invirtiendo con recursos ' +
                              'que faciliten el trabajo de construir relaciones que cambien vidas, ' +
                              'familias y comunidades.También estamos con la disposición de unir ' +
                              'esfuerzos con otras organizaciones que compartan nuestra pasión por ' +
                              'los adolescentes del país.</p>';
      break;
    }
    default: {
      console.log('Ninguna de las anteriores');
      break;
    }
  };
}

}
