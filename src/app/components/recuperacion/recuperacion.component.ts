import { Component } from '@angular/core';

@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.component.html',
  styleUrl: './recuperacion.component.scss'
})
export class RecuperacionComponent {
  changepass() {
    const nuevoPass = (<HTMLInputElement>document.getElementById('nuevaPwd')).value;
    const confirmaPass = (<HTMLInputElement>document.getElementById('confirmaPwd')).value;

    if (nuevoPass !== "" && nuevoPass === confirmaPass) {
      localStorage.setItem('passUsuario', nuevoPass);
      alert("La contraseña se cambió exitosamente :)");
      window.location.href = '/'; 
    } else {
      const ad: HTMLElement | null = document.getElementById('advertencia');
      if (ad) {
        ad.innerHTML = `<div>Error al cambiar la contraseña</div>`;
      }
    }
  }
}
