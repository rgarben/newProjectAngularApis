import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Digimon } from '../interfaces/digimon';


@Injectable({
  providedIn: 'root',
})
export class DigimonsService {
  private apiUrl = 'https://digimon-api.vercel.app/api/digimon';

  constructor(private http: HttpClient) {}

  getDigimons(): Observable<Digimon[]> {
    return this.http.get<Digimon[]>(this.apiUrl);
  }

  addDigimon(personaje: Omit<Digimon, 'id'>): Observable<Digimon> {
    return this.http.post<Digimon>(`${this.apiUrl}`, personaje);
  }

  getDigimonPorId(id:number): Observable<Digimon> {
    return this.http.get<Digimon>(`${this.apiUrl}/${id}`);
  }

  editarDigimon(id:number, personaje: Digimon): Observable<Digimon>{
    return this.http.put<Digimon>(`${this.apiUrl}/${id}`, personaje);
  }

  deleteDigimon(id:number): Observable<Digimon>{
    return this.http.delete<Digimon>(`${this.apiUrl}/${id}`);
  }

  buscarDigimonPorNombre(name: string): Observable<Digimon[]>{
    return this.http.get<Digimon[]>(`${this.apiUrl}?name_like=${name}`);
  }

}
