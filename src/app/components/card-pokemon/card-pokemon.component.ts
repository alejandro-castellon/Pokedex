import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Result } from '../../Interfaces/pokeapi';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-card-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-pokemon.component.html',
  styleUrl: './card-pokemon.component.scss'
})
export class CardPokemonComponent implements OnChanges{

  constructor(private pokemonService: PokemonsService){}

  ngOnChanges(changes: SimpleChanges): void {
    this.getInformation()
  }

  @Input() data?:Result;
  @Input() selected:boolean = false;
  @Output() clicked = new EventEmitter<string>();
  id:string = "0";

  getInformation(){
    if(this.data){
      this.id = this.data.url.substring(34,this.data.url.length-1);
      this.pokemonService.getById(this.id);
    }
  }
}
