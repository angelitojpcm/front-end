import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../auth/service/auth.service';
import Swal from 'sweetalert2';

export const pagesGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  let isLogged = authService.isLogged();

  if (isLogged) {
    return true;
  } else {
    router.navigate(['/auth/login']).then(() => {
      Swal.fire({
        icon: 'error',
        title: '<strong>¡Atención!</strong>',
        html: '¡Necesitas iniciar sesión para acceder a esta página!',
        timer: 2000,
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timerProgressBar: true,
        iconColor: 'red',
        showCloseButton: true,
        closeButtonHtml: '<i class="fa fa-times"></i>',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
    });
    return false;
  }
};
