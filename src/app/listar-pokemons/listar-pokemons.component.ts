import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pokemon } from '../interfaces/pokemon';
import { PokemonsService } from '../service/pokemons.service';

@Component({
  selector: 'app-listar-pokemons',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './listar-pokemons.component.html',
  styleUrl: './listar-pokemons.component.css',
})
export class ListarPokemonsComponent implements OnInit{

pokemons: Pokemon[] = [];

constructor(private pokemonService: PokemonsService){};

ngOnInit(): void {
  this.pokemonService.getPokemons().subscribe({
    next: (pokemons) => {this.pokemons = pokemons} 
  })
}

}
