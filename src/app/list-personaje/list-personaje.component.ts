
import { Component, Input, OnChanges, OnInit, input } from '@angular/core';
import { PersonajesService } from '../service/personajes.service';
import { Personaje } from '../interfaces/personaje';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-personajes',
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './list-personaje.component.html',
  styleUrl: './list-personaje.component.css',
})
export class PersonajesComponent implements OnChanges {
  personajes: Personaje[] = [];
  personajesFiltrado: Personaje[] = [];
  personajesFavoritos: Personaje[] = [];

  @Input("nombre") nombre: string = "";

  constructor(private personajesService: PersonajesService) {}

  ngOnChanges(): void {
    if(this.nombre && this.nombre.length >=3){
      
      this.personajesService.buscarPorNombre(this.nombre).subscribe({
        next: (personajes) => this.personajes = personajes
      });
    }else{
      this.personajesService.getPersonajes().subscribe({
      next: (personajes) => this.personajes = personajes
    });
    }
    
  }

  deletePerson(id:number): void{
    this.personajesService.deletePersonaje(id).subscribe({
      next: ()=> this.personajesService.getPersonajes().subscribe({
        next: (personajes) => this.personajes = personajes
      })
    })
  }

  changeFavorites(personaje: Personaje){
    if(this.personajesFavoritos.indexOf(personaje) != -1){
      let indice: number=this.personajesFavoritos.indexOf(personaje);
      this.personajesFavoritos.splice(indice,1);
    }else{
      this.personajesFavoritos.push(personaje);
    }
  }

}
