import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { AcercaComponent } from './paginas/acerca/acerca.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { NoEcontradoComponent } from './paginas/no-econtrado/no-econtrado.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { SucursalesComponent } from './paginas/sucursales/sucursales.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    InicioComponent,
    AcercaComponent,
    ProductosComponent,
    NoEcontradoComponent,
    FooterComponent,
    SucursalesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
