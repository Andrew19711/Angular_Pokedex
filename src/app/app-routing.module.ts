import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesComponent } from './components/detalles/detalles.component';
import { LoginComponent } from './components/login/login.component';
import { FormComponent } from './components/form/form.component';
import { RecuperacionComponent } from './components/recuperacion/recuperacion.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'Registrarse', component: FormComponent},
  {path: 'recupass', component: RecuperacionComponent},
  {path: 'home', component: DashboardComponent},
  {path: 'MenuL', component: MenuLateralComponent },
  {path: 'Detalle', component: DetallesComponent},
  {path: 'HEader', component: HeaderComponent},
  {path: 'FOteer',component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }