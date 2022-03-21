import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {

  constructor(private toastr: ToastrService) { }

  showNotification(from="top", align="center", color){

    switch(color){
      case 1:
      this.toastr.success('<span class="now-ui-icons ui-1_bell-53"></span> Guardado con éxito.', '', {
         timeOut: 8000,
         closeButton: true,
         enableHtml: true,
         toastClass: "alert alert-success alert-with-icon",
         positionClass: 'toast-' + from + '-' +  align
       });
      break;
      case 2:
      this.toastr.error('<span class="now-ui-icons ui-1_bell-53"></span> Ocurrió un error.', '', {
         timeOut: 8000,
         enableHtml: true,
         closeButton: true,
         toastClass: "alert alert-danger alert-with-icon",
         positionClass: 'toast-' + from + '-' +  align
       });
       break;

      default:
      break;
    }
}
}
