import { NotificacionesService } from './../notificaciones.service';
import { ApiService } from './../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto-info',
  templateUrl: './producto-info.component.html',
  styleUrls: ['./producto-info.component.css']
})
export class ProductoInfoComponent implements OnInit {
  id: number;
  producto= {};
  constructor(
    private rutaActiva: ActivatedRoute,
    private fb: FormBuilder,
    private api: ApiService,
    private notificacion: NotificacionesService
  ) { }

  productoForm: FormGroup;
  ngOnInit(): void {
    this.id = this.rutaActiva.snapshot.params.id;
    this.createForm()
    this.getProducto()
  }

  createForm() {
    this.productoForm = this.fb.group({
      id: ["", Validators.required],
      nombre: ["", Validators.required],
      descripcion: ["", Validators.required],
      precio: [null, [Validators.required, Validators.pattern(/^\d+[\.]\d{2}$/i)]],
    });
  }

  getProducto(){
    this.api.getProducto(this.id).subscribe(
      (res: {}) => {
        this.producto = res;
        this.productoForm.setValue(this.producto)
      }
    )
  }

  onSubmit() {
    if (this.productoForm.valid) {
      console.log(this.productoForm.value);
      this.api.updateProductos(this.productoForm.value).subscribe(
        res=>{
          this.notificacion.showNotification("top", "center", 1)
        }
      )
    } else {
      this.productoForm.markAllAsTouched();
      this.notificacion.showNotification("top", "center", 2)
    }
  }

}
