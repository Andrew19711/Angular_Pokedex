import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServePokService } from '../../services/serve-pok.service';
import { Resultado } from '../../interface/respuestaapi';
import { Pokemon } from '../../interface/pokemon';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  constructor(private ServePokService: ServePokService){}
  @ViewChild('tarjetas')
   tarjetasElement!: ElementRef;

  listaPokemon:Resultado[] =[]

  pagina:number =1;
  loading: boolean = false;
  pokeselect?: Pokemon
  detalle:boolean= false;

  ngOnInit(): void {
    this.LoadList();
  }
  nameStart(){
    return localStorage.getItem('nombreUsuario') || 'Invitado';
  }

  async LoadList()
  {
   this.loading= true;
   this.listaPokemon= [...this.listaPokemon, ...await this.ServePokService.getPage(this.pagina)]
   console.log(this.listaPokemon)
   this.loading=false;
   this.pagina++;
  }

  onScroll(e:any){
    if(this.loading) return;
    if(
      Math.round(
        this.tarjetasElement.nativeElement.clientHeight + this.tarjetasElement.nativeElement.scrollTop
      )
      === e.srcElement.srollHeight){
        this.LoadList()
      }
  }

  
  async menuclick(id:string){
    this.pokeselect= await this.ServePokService.getById(id);
  }

  detalleAbierto(){
    if(this.pokeselect)
    this.detalle = !this.detalle;

  }
}
