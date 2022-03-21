import { Producto } from './../models/producto';
import { Cliente } from './../models/cliente';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NotificacionesService } from '../notificaciones.service';

@Component({
  selector: 'app-orden-agregar',
  templateUrl: './orden-agregar.component.html',
  styleUrls: ['./orden-agregar.component.css']
})
export class OrdenAgregarComponent implements OnInit {

  ordenForm: FormGroup
  clientes: Cliente[]
  productos: Producto[]

  constructor(private fb: FormBuilder, private api: ApiService, private notificacion: NotificacionesService) { }

  ngOnInit(): void {
    this.createForm()
    this.getClientes()
    this.getProductos()
  }

  createForm() {
    this.ordenForm = this.fb.group({
      id: ["", Validators.required],
      idCliente: ["", Validators.required],
      idProducto: ["", Validators.required],
      cantidad: [null, [Validators.required, Validators.pattern(/^[1-9]{1,99}$/i)]],
      fecha: ["", Validators.required],
    });
  }

  getClientes (){
    this.api.getClientes().subscribe(
      (res: Cliente[]) => {
        this.clientes = res;
      }
    )
  }

  getProductos (){
    this.api.getProductos().subscribe(
      (res: Producto[]) => {
        this.productos = res;
      }
    )
  }

  onSubmit() {
    if (this.ordenForm.valid) {
      console.log(this.ordenForm.value);
      this.api.createOrdenes(this.ordenForm.value).subscribe(
        res=>{
          this.ordenForm.reset();
          this.notificacion.showNotification("top", "center", 1)
        }
      )
    } else {
      this.ordenForm.markAllAsTouched();
      this.notificacion.showNotification("top", "center", 2)
    }
  }

}
