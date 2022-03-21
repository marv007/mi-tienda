import { NotificacionesService } from '../notificaciones.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, } from "@angular/forms";
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cliente-agregar',
  templateUrl: './cliente-agregar.component.html',
  styleUrls: ['./cliente-agregar.component.css']
})
export class ClienteAgregarComponent implements OnInit {

  clienteForm: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService, private notificacion: NotificacionesService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.clienteForm = this.fb.group({
      id: ["", Validators.required],
      nombre: ["", Validators.required],
      apellidos: ["", Validators.required],
      correo: [null, Validators.compose([
        Validators.required, Validators.email])],
      telefono: ["", Validators.required],
      nit: ["", Validators.required]
    });
  }

  onSubmit() {
    if (this.clienteForm.valid) {
      console.log(this.clienteForm.value);
      this.api.createClientes(this.clienteForm.value).subscribe(
        res=>{
          this.clienteForm.reset();
          this.notificacion.showNotification("top", "center", 1)
        }

      )
    } else {
      this.clienteForm.markAllAsTouched();
      this.notificacion.showNotification("top", "center", 2)
    }
  }
}
