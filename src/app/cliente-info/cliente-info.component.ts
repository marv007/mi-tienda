import { NotificacionesService } from './../notificaciones.service';
import { ApiService } from './../api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cliente-info',
  templateUrl: './cliente-info.component.html',
  styleUrls: ['./cliente-info.component.css']
})
export class ClienteInfoComponent implements OnInit {
  clienteForm: FormGroup;
  id: number;
  cliente= {};

  constructor(
    private rutaActiva: ActivatedRoute,
    private fb: FormBuilder,
    private api: ApiService,
    private notificacion: NotificacionesService
    ) {

   }

  ngOnInit(): void {
    this.createForm()
    this.id = this.rutaActiva.snapshot.params.id;
    this.getCliente()
  }

  createForm() {
    this.clienteForm = this.fb.group({
      id: ["", Validators.required],
      nombre: ["", Validators.required],
      apellidos: ["", Validators.required],
      correo: ["", Validators.required],
      telefono: ["", Validators.required],
      nit: ["", Validators.required]
    });
  }

  getCliente(){
    this.api.getCliente(this.id).subscribe(
      (res: {}) => {
        this.cliente = res;
        this.clienteForm.setValue(res)
      }
    )
  }

  onSubmit() {
    if (this.clienteForm.valid) {
      console.log(this.clienteForm.value);
      this.api.updateClientes(this.clienteForm.value).subscribe(
        res=>{
          this.notificacion.showNotification("top", "center", 1)
        }

      )
    } else {
      this.clienteForm.markAllAsTouched();
      this.notificacion.showNotification("top", "center", 2)
    }
  }

}
