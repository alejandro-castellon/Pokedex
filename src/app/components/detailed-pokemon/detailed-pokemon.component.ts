import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { CardPokemonComponent } from '../card-pokemon/card-pokemon.component';
import { Pokemon } from '../../Interfaces/pokemon';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-detailed-pokemon',
  standalone: true,
  imports: [CardPokemonComponent,CommonModule],
  templateUrl: './detailed-pokemon.component.html',
  styleUrl: './detailed-pokemon.component.scss'
})
export class DetailedPokemonComponent implements OnChanges{

  @Input() pokemon?:Pokemon;
  @Input() open:boolean = false;
  @Output() clicked = new EventEmitter();
  description:string = '';

  constructor(private pokemonService:PokemonsService){}

  ngOnChanges(): void {
    if(this.pokemon){
      this.pokemonService.getDescription(this.pokemon?.id).then((res) => {
        this.description = res
      });
    }
  }
}
