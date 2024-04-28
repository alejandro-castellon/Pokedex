import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Pokemon } from '../../Interfaces/pokemon';

@Component({
  selector: 'app-picture-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './picture-pokemon.component.html',
  styleUrl: './picture-pokemon.component.scss'
})
export class PicturePokemonComponent {

  @Input() pokemon?:Pokemon;


}
