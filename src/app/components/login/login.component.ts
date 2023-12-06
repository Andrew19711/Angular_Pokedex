import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  session() {
    const nombreUsuarioIngresado = (<HTMLInputElement>document.getElementById('nombre')).value;
    const passIngresada = (<HTMLInputElement>document.getElementById('pwd')).value;

    const nombreUsuarioRegistrado = localStorage.getItem('nombreUsuario');
    const passRegistrado = localStorage.getItem('passUsuario');

    if (
      nombreUsuarioIngresado === nombreUsuarioRegistrado &&
      passIngresada === passRegistrado
    ) {
      window.location.href = '/home';
    } else {
      const ad: HTMLElement | null = document.getElementById('advertencia');
      if (ad) {
        ad.innerHTML = `<div style=" color: red">USUARIO O CONTRASEÑA INCORRECTOS</div>`;
      }
    } 
  }
}
