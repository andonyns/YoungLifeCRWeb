import { Injectable } from '@angular/core';

@Injectable()
export class ComunidadesService {

  private ListaAreas: Areas[] = [{
      nombre: 'Area Central',
      ListaComunidades: [{
        Nombre: 'Lourdes ',
        Horario: 'Viernes 6pm',
        Director: 'Daniel Zuniga',
        Contacto: '####-####',
        Lugar: 'Salon Comunal Calle Siles'
      },
      {
        Nombre: 'Granadilla ',
        Horario: '',
        Director: '',
        Contacto: '',
        Lugar: ''
      },
      {
        Nombre: 'Barrio Pinto ',
        Horario: '',
        Director: '',
        Contacto: '',
        Lugar: ''
      },
      {
        Nombre: 'San Rafael ',
        Horario: '',
        Director: '',
        Contacto: '',
        Lugar: ''
      },
      {
        Nombre: 'Capernaum San Pedro ',
        Horario: '',
        Director: '',
        Contacto: '',
        Lugar: ''
      },
    ],
    img: '../../assets/img/AreaCentral.jpg',
    LinkFacebook: 'https://www.facebook.com/CentralVJ/',
    CodigoArea: 'AC'
  },
    {
      nombre: 'Area Norte',
      ListaComunidades: [{
        Nombre: 'Moravia ',
        Horario: '',
        Director: '',
        Contacto: '',
        Lugar: ''
      },
      {
        Nombre: 'San Antonio ',
        Horario: '',
        Director: '',
        Contacto: '',
        Lugar: ''
      },
      {
        Nombre: 'El Carmen',
        Horario: '',
        Director: '',
        Contacto: '',
        Lugar: ''
      }],
      img: '../../assets/img/AreaNorte.jpeg',
      LinkFacebook: 'https://www.facebook.com/vjnorte',
      CodigoArea: 'AN'
    },
    {
      nombre: 'Área Oeste',
      ListaComunidades: [{
        Nombre: 'Alajuela ',
        Horario: '',
        Director: '',
        Contacto: '',
        Lugar: ''
      },
      {
        Nombre: 'Santa Barbara ',
        Horario: '',
        Director: '',
        Contacto: '',
        Lugar: ''
      },
      {
        Nombre: 'Invu Las Cañas ',
        Horario: '',
        Director: '',
        Contacto: '',
        Lugar: ''
        },
        {
          Nombre: 'Capernaum Alajuela',
          Horario: '',
          Director: '',
          Contacto: '',
          Lugar: ''
        },
        {
          Nombre: 'Barrio Nuevo',
          Horario: '',
          Director: '',
          Contacto: '',
          Lugar: ''
        },
        {
          Nombre: 'El Carmen',
          Horario: '',
          Director: '',
          Contacto: '',
          Lugar: ''
        }
    ],
      img: '../../assets/img/AreaOeste.png',
      LinkFacebook: 'https://www.facebook.com/VidaJovenAreaOeste?fref=ts',
      CodigoArea: 'AO'
    },
    {
      nombre: 'Área Este',
      ListaComunidades: [{
        Nombre: 'Montufar ',
        Horario: '',
        Director: '',
        Contacto: '',
        Lugar: ''
      },
      {
        Nombre: 'Curriabat',
        Horario: '',
        Director: '',
        Contacto: '',
        Lugar: ''
      }],
      img: '../../assets/img/AreaEste.png',
      LinkFacebook: 'https://www.facebook.com/Vida-Joven-%C3%81rea-Este-531732240179309/',
      CodigoArea: 'AE'
    },
    {
      nombre: 'Vidas Jovenes',
      ListaComunidades: [{
        Nombre: 'San Pedro ',
        Horario: '',
        Director: '',
        Contacto: '',
        Lugar: ''
      },
      {
        Nombre: 'Alajuela',
        Horario: '',
        Director: '',
        Contacto: '',
        Lugar: ''
      }],
      img: '../../assets/img/CampaEntrenamiento.jpg',
      LinkFacebook: 'https://www.facebook.com/Vidas-Jovenes-Costa-Rica-215824008487295/',
      CodigoArea: 'VJ'
    },
    {
      nombre: 'Colegios Internacionales',
      ListaComunidades: [{
        Nombre: 'Wyldlife Escazú ',
        Horario: '',
        Director: '',
        Contacto: '',
        Lugar: ''
      }],
      img: '../../assets/img/CampaEntrenamiento.jpg',
      LinkFacebook: '',
      CodigoArea: 'CI'
    },
];
  constructor() {
  console.log('Servicio Comunidades');
 }

  getTodasLasAreas() {
    return this.ListaAreas;
  }
  getArea(idx) {
    return this.ListaAreas[idx];
  }

}
export interface Areas {
  nombre: string,
  ListaComunidades: Comunidades[] ,
  img: string,
  LinkFacebook: string,
  CodigoArea: String
}
export interface Comunidades {
Nombre: string,
Horario: string,
Director: string,
Contacto: string,
Lugar: string
}
