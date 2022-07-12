import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgregarCarritoService {
  private url: string = `${environment.service_url}/pedido/crearCarrito`;

  constructor(private http:HttpClient) { }

  public agregarCarrito(cantidad:number, nombre:string){
    return this.http.post(this.url, {
      cantidad:cantidad,
      nombreProducto:nombre
    });
  }
}
