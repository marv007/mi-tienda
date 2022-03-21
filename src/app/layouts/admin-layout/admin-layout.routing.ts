import { ClientesComponent } from './../../clientes/clientes.component';
import { OrdenAgregarComponent } from './../../orden-agregar/orden-agregar.component';
import { OrdenesComponent } from './../../ordenes/ordenes.component';
import { ProductoInfoComponent } from './../../producto-info/producto-info.component';
import { ProductoAgregarComponent } from './../../producto-agregar/producto-agregar.component';
import { ProductosComponent } from './../../productos/productos.component';
import { ClienteInfoComponent } from './../../cliente-info/cliente-info.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';

import { ClienteAgregarComponent } from '../../cliente-agregar/cliente-agregar.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'mi-tienda',      component: DashboardComponent },
    { path: 'mi-tienda/clientes',   component: ClientesComponent },
    { path: 'mi-tienda/clientes/agregar',     component: ClienteAgregarComponent },
    { path: 'mi-tienda/clientes/mostrar/:id',     component: ClienteInfoComponent },
    { path: 'mi-tienda/productos',     component: ProductosComponent },
    { path: 'mi-tienda/productos/agregar',     component: ProductoAgregarComponent },
    { path: 'mi-tienda/productos/mostrar/:id',     component: ProductoInfoComponent },
    { path: 'mi-tienda/ordenes',     component: OrdenesComponent },
    { path: 'mi-tienda/ordenes/agregar',     component: OrdenAgregarComponent },

];
