import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pokemon } from '../../interface/pokemon';

@Component({
  selector: 'app-photo-pok',
  templateUrl: './photo-pok.component.html',
  styleUrl: './photo-pok.component.scss'
})
export class PhotoPokComponent {
  @Input() pokemon?: Pokemon;
}
