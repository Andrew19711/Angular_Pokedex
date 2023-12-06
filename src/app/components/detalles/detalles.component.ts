import { Component, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Pokemon } from '../../interface/pokemon';
import { ServePokService } from '../../services/serve-pok.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.scss'
})
export class DetallesComponent implements OnChanges{
  @Input() pokemon?:Pokemon;
  @Input() abierto:boolean =false;
  @Output() clicked = new EventEmitter();
  descripcion: string = "";

  constructor( private ServePokService: ServePokService){}

  ngOnChanges(changes: SimpleChanges): void{
    if(this.pokemon){
      this.ServePokService.getDescripcion(this.pokemon?.id).then(res =>{
        this.descripcion = res
      })
  }
  
    
}
}
