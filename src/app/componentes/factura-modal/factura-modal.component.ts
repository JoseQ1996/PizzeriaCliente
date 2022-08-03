import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-factura-modal',
  templateUrl: './factura-modal.component.html',
  styleUrls: ['./factura-modal.component.css']
})
export class FacturaModalComponent implements OnInit, AfterViewInit {

  @Input() factura: any;
  usuario: any;
  detalles: any[] = [];

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
    this.usuario = this.factura['usuarioFactura'];
    this.detalles = this.factura['facturadetalle'];
    this.cdRef.detectChanges();
  }
}
