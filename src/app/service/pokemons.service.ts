import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';


@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private apiUrl = 'http://localhost:3000/pokemons';

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.apiUrl);
  }

  addPokemon(pokemon: Pick<Pokemon, 'name' | 'type' | 'base' | 'image'>): Observable<Pokemon> {
    return this.http.post<Pokemon>(`${this.apiUrl}`, pokemon);
  }

  getPokemonPorId(id:number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}/${id}`);
  }

  editarPokemon(id:number, pokemon: Pokemon): Observable<Pokemon>{
    return this.http.put<Pokemon>(`${this.apiUrl}/${id}`, pokemon);
  }

  deletePokemon(id:number): Observable<Pokemon>{
    return this.http.delete<Pokemon>(`${this.apiUrl}/${id}`);
  }

  buscarPokemonPorNombre(name: string): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(`${this.apiUrl}?name_like=${name}`);
  }

}
