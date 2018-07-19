import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

// Rutas
import {APP_ROUTING} from './app.routes';

// Servicios
import { ComunidadesService} from './services/Comunidades.service';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component'
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { DondeEstamosComponent } from './components/donde-estamos/donde-estamos.component';
import { SeaParteComponent } from './components/sea-parte/sea-parte.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { NoticiasComponent } from './components/noticias/noticias.component';

// Pipes
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { EscapeHtmlPipe } from './pipes/KeepHtml.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DomseguroPipe,
    QuienesSomosComponent,
    DondeEstamosComponent,
    SeaParteComponent,
    ContactenosComponent,
    NoticiasComponent,
    EscapeHtmlPipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBGNF7kvpBjUmsUmuZQzze5uXYGXket3Bw'
    })
  ],
  providers: [
    ComunidadesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
