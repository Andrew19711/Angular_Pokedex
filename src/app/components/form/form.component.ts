import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'] 
})
export class FormComponent {
  Registro() { 
    const nombreUsuario = (<HTMLInputElement>document.getElementById('nombre')).value;    
    const passUsuario = (<HTMLInputElement>document.getElementById('pwd')).value;

    localStorage.setItem('nombreUsuario', nombreUsuario);
    localStorage.setItem('passUsuario', passUsuario);

    if (nombreUsuario !== "" && passUsuario != ""){
      window.location.href = '/'; 
      alert("Registrado correctamente");
    } else{
      const ad: HTMLElement | null = document.getElementById('advertencia');
      if (ad) {
        ad.innerHTML = `<div class="alert alert-danger">El registro fallo</div>`;
      }
    }
  }
}

