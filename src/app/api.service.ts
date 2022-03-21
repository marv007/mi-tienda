import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { environment } from '../environments/environment';
import { Cliente } from './models/Cliente';
import { Producto } from './models/producto';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,) { }

  getClientes(): Observable<any>{
    return new Observable((observer)=>{
      this.http.get(`${environment.API_URL}/clientes`,)
      .subscribe(
        res => {
          console.log('clientes', res);
          observer.next(res);
          observer.complete();
        },
        err =>{
          console.error('clientes', err);
          observer.error(err);
          observer.complete();
        }
      )
    })
  }

  getCliente(id: number): Observable<Cliente>{
    return new Observable((observer)=>{
      this.http.get(`${environment.API_URL}/clientes/${id}`,)
      .subscribe(
        (res: Cliente) => {
          console.log('cliente', res);
          observer.next(res);
          observer.complete();
        },
        err =>{
          console.error('clientes', err);
          observer.error(err);
          observer.complete();
        }
      )
    })
  }

  createClientes(cliente): Observable<any>{
    return new Observable((observer)=>{
      this.http.post(`${environment.API_URL}/clientes`, cliente)
      .subscribe(
        res => {
          console.log('cliente', res);
          observer.next(res);
          observer.complete();
        },
        err =>{
          console.error('clientes', err);
          observer.error(err);
          observer.complete();
        }
      )
    })
  }

  updateClientes(cliente): Observable<any>{
    return new Observable((observer)=>{
      this.http.put(`${environment.API_URL}/clientes/${cliente.id}`, cliente)
      .subscribe(
        res => {
          console.log('cliente', res);
          observer.next(res);
          observer.complete();
        },
        err =>{
          console.error('clientes', err);
          observer.error(err);
          observer.complete();
        }
      )
    })
  }

  getProductos(): Observable<any>{
    return new Observable((observer)=>{
      this.http.get(`${environment.API_URL}/productos`,)
      .subscribe(
        res => {
          observer.next(res);
          observer.complete();
        },
        err =>{
          console.error('productos', err);
          observer.error(err);
          observer.complete();
        }
      )
    })
  }

  getProducto(id: number): Observable<Producto>{
    return new Observable((observer)=>{
      this.http.get(`${environment.API_URL}/productos/${id}`,)
      .subscribe(
        (res: Producto) => {
          observer.next(res);
          observer.complete();
        },
        err =>{
          console.error('productos', err);
          observer.error(err);
          observer.complete();
        }
      )
    })
  }

  createProductos(producto): Observable<any>{
    return new Observable((observer)=>{
      this.http.post(`${environment.API_URL}/productos`, producto)
      .subscribe(
        res => {
          observer.next(res);
          observer.complete();
        },
        err =>{
          console.error('productos', err);
          observer.error(err);
          observer.complete();
        }
      )
    })
  }
  updateProductos(producto): Observable<any>{
    return new Observable((observer)=>{
      this.http.put(`${environment.API_URL}/productos/${producto.id}`, producto)
      .subscribe(
        res => {
          observer.next(res);
          observer.complete();
        },
        err =>{
          console.error('producto', err);
          observer.error(err);
          observer.complete();
        }
      )
    })
  }

  getOrdenes(): Observable<any>{
    return new Observable((observer)=>{
      this.http.get(`${environment.API_URL}/ordenes`,)
      .subscribe(
        res => {
          observer.next(res);
          observer.complete();
        },
        err =>{
          console.error('productos', err);
          observer.error(err);
          observer.complete();
        }
      )
    })
  }

  createOrdenes(orden): Observable<any>{
    return new Observable((observer)=>{
      this.http.post(`${environment.API_URL}/ordenes`, orden)
      .subscribe(
        res => {
          observer.next(res);
          observer.complete();
        },
        err =>{
          console.error('ordenes', err);
          observer.error(err);
          observer.complete();
        }
      )
    })
  }
}
