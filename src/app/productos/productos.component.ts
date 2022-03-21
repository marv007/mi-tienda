import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos = [];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    this.api.getProductos().subscribe( (res: [])  =>
      {
        this.productos = res;
      }
      )
  }

}
