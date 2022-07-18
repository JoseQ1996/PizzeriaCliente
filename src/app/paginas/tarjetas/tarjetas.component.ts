import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TarjetaComponent } from 'src/app/componentes/tarjeta/tarjeta.component';
import { SesionService } from 'src/app/servicios/sesion.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  public tarjetas: any[] = [];

  constructor(public dialog: MatDialog, private ss: SesionService) { }

  ngOnInit(): void {
    const usuario = this.ss.obtenerSesion();
    const codigo = usuario['codigoCuenta'];
    this.tarjetas = usuario['tarjetaC'];
  }

  public add() {
    const dialogRef = this.dialog.open(TarjetaComponent, {
      width: '400px',
      height: '500px',
      panelClass: 'my-dialog',
      disableClose: false
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
