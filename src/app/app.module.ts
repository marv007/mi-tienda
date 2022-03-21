import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClienteInfoComponent } from './cliente-info/cliente-info.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoAgregarComponent } from './producto-agregar/producto-agregar.component';
import { ProductoInfoComponent } from './producto-info/producto-info.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { OrdenAgregarComponent } from './orden-agregar/orden-agregar.component';
import { ClientesComponent } from './clientes/clientes.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ClienteInfoComponent,
    ProductosComponent,
    ProductoAgregarComponent,
    ProductoInfoComponent,
    OrdenesComponent,
    OrdenAgregarComponent,
    ClientesComponent,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
