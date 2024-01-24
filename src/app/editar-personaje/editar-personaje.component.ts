import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonajesService } from '../service/personajes.service';
import { Personaje } from '../interfaces/personaje';

@Component({
  selector: 'app-editar-personaje',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-personaje.component.html'
})
export class EditarPersonajeComponent implements OnInit {

  @Input("id") id!: number;

  personaje!: Personaje;
  
  constructor (private personajesService: PersonajesService){};
  
  ngOnInit(): void {
    
  this.personajesService.getPersonajePorId(this.id).subscribe({
    next: (personaje) => this.personaje = { ...personaje }
  });

  }

  editPersonaje() {
    if (this.personaje) {
      this.personajesService.editarPersonaje(this.id, this.personaje).subscribe({
        next: (personajeActualizado) => {
        },
        error: (error) => console.error('Error al editar el personaje', error)
      });
    }
  }

}