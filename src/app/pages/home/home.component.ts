import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { CardPokemonComponent } from '../../components/card-pokemon/card-pokemon.component';
import { PicturePokemonComponent } from '../../components/picture-pokemon/picture-pokemon.component';
import { PokemonsService } from '../../services/pokemons.service';
import { Result } from '../../Interfaces/pokeapi';
import { Pokemon } from '../../Interfaces/pokemon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardPokemonComponent,PicturePokemonComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  
  constructor(private pokemonService: PokemonsService){}
  @ViewChild('cards') cardsElement!:ElementRef;

  pokemonList: Result[] = []
  page:number = 1;
  loading:boolean = false;
  selectedPokemon?:Pokemon;

  ngOnInit(): void {
    this.loadList();
  }

  async loadList(){
    this.loading = true;
    this.pokemonList = [...this.pokemonList, ... await this.pokemonService.getByPage(this.page)];
    this.loading = false
    this.page++;
  }

  onScroll(e:any){
    if(this.loading) return;
    if(
      Math.round(
        this.cardsElement.nativeElement.clientHeight + this.cardsElement.nativeElement.scrollTop
      )
      === e.srcElement.scrollHeight){
        this.loadList()
      }
  }

  async cardClicked(id:string){
    this.selectedPokemon = await this.pokemonService.getById(id);
  }
}
