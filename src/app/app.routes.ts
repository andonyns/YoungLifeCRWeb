import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {ContactenosComponent} from './components/contactenos/contactenos.component';
import {DondeEstamosComponent} from './components/donde-estamos/donde-estamos.component';
import {QuienesSomosComponent} from './components/quienes-somos/quienes-somos.component';
import {SeaParteComponent} from './components/sea-parte/sea-parte.component';
import {NoticiasComponent} from './components/noticias/noticias.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'Donde', component: DondeEstamosComponent },
  { path: 'Quienes', component: QuienesSomosComponent },
  { path: 'SeaParte', component: SeaParteComponent },
  { path: 'Noticias', component: NoticiasComponent },
  { path: 'Contactenos', component: ContactenosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
