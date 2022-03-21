import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/Cliente';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {
  ordenes = [];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getOrdenes()
  }

  getOrdenes(){
    this.api.getOrdenes().subscribe(
      (res: [])=>{
        this.ordenes = res

        this.ordenes.map(orden =>{
          this.api.getCliente(orden.idCliente).subscribe(
            (cliente: Cliente) => {
              orden.cliente = `${cliente.nombre} ${cliente.apellidos}`
            }
          )
          this.api.getProducto(orden.idProducto).subscribe(
            (producto: Producto) => {
              orden.producto = producto.nombre
              orden.total = producto.precio*orden.cantidad
            }
          )
        })
      }
    )
  }

}
