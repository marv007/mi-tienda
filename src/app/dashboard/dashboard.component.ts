import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  productos= []
  ordenes= []
  clientes= []
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getProductos().subscribe(
      (res: []) => {
        this.productos = res
      }
    )
    this.api.getClientes().subscribe(
      (res: []) => {
        this.clientes = res
      }
    )
    this.api.getOrdenes().subscribe(
      (res: []) => {
        this.ordenes = res
      }
    )

  }
}
