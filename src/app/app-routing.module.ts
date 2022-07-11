import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaComponent } from './paginas/acerca/acerca.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { NoEcontradoComponent } from './paginas/no-econtrado/no-econtrado.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { SucursalesComponent } from './paginas/sucursales/sucursales.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'productos/:nombre',
    component: ProductosComponent
  },
  {
    path: 'sucursales',
    component: SucursalesComponent
  },
  {
    path: 'acerca',
    component: AcercaComponent
  },
  {
    path: '404',
    component: NoEcontradoComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '404',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
