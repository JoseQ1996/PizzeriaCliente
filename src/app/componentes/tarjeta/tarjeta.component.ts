import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  public registerForm: FormGroup;
  public loading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<TarjetaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
  ) {
    this.registerForm = this.formBuilder.group({
      propietario: ['', Validators.required],
      numero: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      codigo: ['', Validators.required],
      fecha: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  public onSubmit() {
    if (this.registerForm.invalid) {
      return Object.values(this.registerForm.controls).forEach(control => {
        if (control instanceof FormGroup)
          Object.values(control.controls).forEach(ctrl => ctrl.markAsTouched());
        else
          control.markAsTouched();
      });
    }

    this.loading = true;

    const propietario = this.registerForm.get('propietario')?.value;
    const numero = this.registerForm.get('numero')?.value;
    const codigo = this.registerForm.get('codigo')?.value;
    const fecha = this.registerForm.get('fecha')?.value;
    console.log(propietario, numero, codigo, fecha);

    setTimeout(() => {
      location.href = '/tarjetas';
    }, 1000);
  }

  public isInValid(input: string) {
    return this.registerForm.get(input)?.invalid && this.registerForm.get(input)?.touched;
  }

  public isValid(input: string) {
    return this.registerForm.get(input)?.valid;
  }


}
