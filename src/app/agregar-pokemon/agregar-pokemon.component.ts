import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pokemon } from '../interfaces/pokemon';
import { PokemonsService } from '../service/pokemons.service';

@Component({
  selector: 'app-agregar-pokemon',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './agregar-pokemon.component.html'
})
export class AgregarPokemonComponent {

  pokemons: Pokemon[] =  [];

  newPokemon: Pick<Pokemon, 'name' | 'type' | 'base' | 'image'> = {
    name: {
      english: '',
      japanese: '',
      chinese: '',
      french: '',
    },
    type: [],
    base: {
      HP: 0,
      Attack: 0,
      Defense: 0,
      'Sp. Attack': 0,
      'Sp. Defense': 0,
      Speed: 0,
    },
    image: {
      sprite: '',
      thumbnail: '',
      hires: '',
    },
  };

  constructor(private pokemonService: PokemonsService) {}
  addPokemon() {
    this.pokemonService.addPokemon(this.newPokemon).subscribe({
      next: (pokemon) => {
        this.pokemons.push(pokemon);
        this.newPokemon = {
          name: {
            english: '',
            japanese: '',
            chinese: '',
            french: '',
          },
          type: [],
          base: {
            HP: 0,
            Attack: 0,
            Defense: 0,
            'Sp. Attack': 0,
            'Sp. Defense': 0,
            Speed: 0,
          },
          image: {
            sprite: '',
            thumbnail: '',
            hires: '',
          },
        };
      },
      error: (error) => console.error('Error al añadir el Pokémon', error),
    });
  }

}
