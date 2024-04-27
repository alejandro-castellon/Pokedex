import { Component } from '@angular/core';
import { CardPokemonComponent } from '../../components/card-pokemon/card-pokemon.component';
import { PicturePokemonComponent } from '../../components/picture-pokemon/picture-pokemon.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardPokemonComponent,PicturePokemonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
