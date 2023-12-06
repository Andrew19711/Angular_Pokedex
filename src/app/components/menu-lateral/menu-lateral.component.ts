import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Resultado } from '../../interface/respuestaapi';
import { ServePokService } from '../../services/serve-pok.service';
import { fail } from 'assert';
import { Pokemon } from '../../interface/pokemon';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.scss'
})
export class MenuLateralComponent implements OnChanges {
  constructor( private ServePokService: ServePokService){}

  ngOnChanges(changes: SimpleChanges) {
    this.extraerInf()
  }
  @Input() data?:Resultado;
  @Input() seleccionado: boolean = false;
  @Input() fullData?: Pokemon;
  @Output() selected = new EventEmitter<string>();
  id: string = '0';

  extraerInf(){
    if(this.data && this.data.url !== ""){
      this.id= this.data.url.substring(34,this.data.url.length-1)
    }
    if(this.fullData){
      this.id= this.fullData.species.url.substring(42,this.fullData.species.url.length-1)
      this.data = {
        name: this.fullData.species.name,
        url: ""
      }
    }
  }
}
