import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personaje } from '../interfaces/personaje';


@Injectable({
  providedIn: 'root',
})
export class PersonajesService {
  private apiUrl = 'http://localhost:3000/personajes';

  constructor(private http: HttpClient) {}

  getPersonajes(): Observable<Personaje[]> {
    return this.http.get<Personaje[]>(this.apiUrl);
  }

  addPersonaje(personaje: Omit<Personaje, 'id'>): Observable<Personaje> {
    return this.http.post<Personaje>(`${this.apiUrl}`, personaje);
  }

  getPersonajePorId(id:number): Observable<Personaje> {
    return this.http.get<Personaje>(`${this.apiUrl}/${id}`);
  }

  editarPersonaje(id:number, personaje: Personaje): Observable<Personaje>{
    return this.http.put<Personaje>(`${this.apiUrl}/${id}`, personaje);
  }

  deletePersonaje(id:number): Observable<Personaje>{
    return this.http.delete<Personaje>(`${this.apiUrl}/${id}`);
  }

  buscarPorNombre(nombre: string): Observable<Personaje[]>{
    return this.http.get<Personaje[]>(`${this.apiUrl}?nombre_like=${nombre}`);
  }

}
