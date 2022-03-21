import { NotificacionesService } from './../notificaciones.service';
import { ApiService } from './../api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-producto-agregar',
  templateUrl: './producto-agregar.component.html',
  styleUrls: ['./producto-agregar.component.css']
})
export class ProductoAgregarComponent implements OnInit {
  productoForm: FormGroup;
  constructor(private fb: FormBuilder, private api: ApiService, private notificacion: NotificacionesService) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.productoForm = this.fb.group({
      id: ["", Validators.required],
      nombre: ["", Validators.required],
      descripcion: ["", Validators.required],
      precio: [null, [Validators.required, Validators.pattern(/^\d+[\.]\d{2}$/i)]],
    });
  }

  onSubmit() {
    if (this.productoForm.valid) {
      console.log(this.productoForm.value);
      this.api.createProductos(this.productoForm.value).subscribe(
        res=>{
          this.productoForm.reset();
          this.notificacion.showNotification("top", "center", 1)
        }
      )
    } else {
      this.productoForm.markAllAsTouched();
      this.notificacion.showNotification("top", "center", 2)
    }
  }

}
