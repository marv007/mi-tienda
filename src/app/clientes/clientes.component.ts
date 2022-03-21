import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes = [];
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getClientes()
  }

  getClientes(){
    this.api.getClientes().subscribe( (res: [])  =>
      {
        this.clientes = res;
      }
      )
  }

}
