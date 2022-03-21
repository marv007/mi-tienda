import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/mi-tienda', title: 'Home',  icon: 'emoticons_satisfied', class: '' },
    { path: '/mi-tienda/ordenes', title: 'Ordenes',  icon:'design_bullet-list-67', class: '' },
    { path: '/mi-tienda/clientes', title: 'Clientes',  icon:'users_single-02', class: '' },
    { path: '/mi-tienda/productos', title: 'Productos',  icon:'shopping_tag-content', class: '' },



];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
