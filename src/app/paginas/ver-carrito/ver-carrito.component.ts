import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarritoModalComponent } from 'src/app/componentes/carrito-modal/carrito-modal.component';
import { EditarCarritoComponent } from 'src/app/componentes/editar-carrito/editar-carrito.component';
import { AgregarCarritoService } from 'src/app/servicios/agregar-carrito.service';
import { ListarCarroService } from 'src/app/servicios/listar-carro.service';

@Component({
  selector: 'app-ver-carrito',
  templateUrl: './ver-carrito.component.html',
  styleUrls: ['./ver-carrito.component.css']
})
export class VerCarritoComponent implements OnInit {
  public listaCarrito: any[] = [];

  constructor(private lcs: ListarCarroService, public dialog: MatDialog, private acs: AgregarCarritoService) { }

  ngOnInit(): void {
    this.lcs.listarCarrito()
      .subscribe((res: any) => {
        console.log(res);
        this.listaCarrito = res;
      })
  }

  public abrirModal(carrito: any) {
    const dialogRef = this.dialog.open(EditarCarritoComponent);
    dialogRef.componentInstance.carrito = carrito;

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public eliminar(nombre: string) {
    const resutl = confirm('Dese retirar el producto del carrito');
    if (resutl) {
      this.acs.eliminarCarrito(nombre)
        .subscribe({
          next: res => {
            console.log(res);
            location.href='/carrito'
            alert('Producto elimin');
          },
          error: e => {
            console.log(e);
            location.href='/carrito'
            alert('Producto elimin'); 
          }
        });
    }
  }

}
