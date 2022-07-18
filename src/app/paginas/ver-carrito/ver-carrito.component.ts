import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarritoModalComponent } from 'src/app/componentes/carrito-modal/carrito-modal.component';
import { EditarCarritoComponent } from 'src/app/componentes/editar-carrito/editar-carrito.component';
import { AgregarCarritoService } from 'src/app/servicios/agregar-carrito.service';
import { ListarCarroService } from 'src/app/servicios/listar-carro.service';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: '¿Esta seguro?',
      text: `Estas a punto de eliminar el producto del carrito`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.acs.eliminarCarrito(nombre)
          .subscribe({
            next: res => {
              console.log(res);
              location.href = '/carrito'
              Swal.fire(
                '¡Eliminado!',
                `Producto eliminado`,
                'success'
              );
            },
            error: e => {
              console.log(e);
              location.href = '/carrito'
              Swal.fire(
                '¡Eliminado!',
                `Producto eliminado`,
                'success'
              );
            }
          });
      }
    });


  }

}
