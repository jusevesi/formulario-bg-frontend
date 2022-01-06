import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaPersonaComponent } from './components/tabla-persona/tabla-persona.component';
import { FormularioPersonaComponent } from './components/formulario-persona/formulario-persona.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HijosComponent } from './components/hijos/hijos.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AppComponent,
    TablaPersonaComponent,
    FormularioPersonaComponent,
    HijosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
