import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Region } from '../interfaces/regiones';


@Injectable({
  providedIn: 'root',
})
export class RegionesService {
  private apiUrl = 'http://localhost:3000/regiones';

  constructor(private http: HttpClient) {}

  getRegiones(): Observable<Region[]> {
    return this.http.get<Region[]>(this.apiUrl);
  }

  addRegion(personaje: Omit<Region, 'id'>): Observable<Region> {
    return this.http.post<Region>(`${this.apiUrl}`, personaje);
  }

  getRegionPorId(id:number): Observable<Region> {
    return this.http.get<Region>(`${this.apiUrl}/${id}`);
  }

  editarRegion(id:number, personaje: Region): Observable<Region>{
    return this.http.put<Region>(`${this.apiUrl}/${id}`, personaje);
  }

  deleteRegion(id:number): Observable<Region>{
    return this.http.delete<Region>(`${this.apiUrl}/${id}`);
  }

  buscarRegionPorNombre(nombre: string): Observable<Region[]>{
    return this.http.get<Region[]>(`${this.apiUrl}?nombre_like=${nombre}`);
  }

}
