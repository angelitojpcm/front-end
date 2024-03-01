import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Auth } from '../../../interfaces/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(public authService: AuthService, public router: Router) {}

  init() {
    this.authService.login(this.email, this.password).subscribe(
      (auth: Auth) => {
        if (auth && auth.user) {
          Swal.fire({
            icon: 'success',
            title: '<strong>¡Atención!</strong>',
            html:
              'Bienvenido, ' +
              auth.user.full_name +
              '! Serás redirigido en unos segundos. ¡Disfruta tu estadía!',
            timer: 2000,
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timerProgressBar: true,
            showCloseButton: true,
            closeButtonHtml: '<i class="fa fa-times"></i>',
            showClass: {
              popup: 'animate__animated animate__fadeInDown',
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp',
            },
          });
          this.router.navigate(['/']);
        } else {
          console.error('auth or auth.user is undefined');
        }
      },
      (error) => {
        // Aquí puedes manejar los errores que puedan ocurrir durante la llamada al servicio de login
        console.error(error);
      }
    );
  }
}
