import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personaje';
import { PersonajesService } from '../service/personajes.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html'
})
export class FormularioComponent {

  personajes: Personaje[] =  [];

  newPersonaje: Omit<Personaje, "id"> = {
    
    nombre: "",
    vision: "",
    arma: "",
    region: "",
    img:""
  }

  constructor(private personajeService: PersonajesService) {}
  addPersonaje() {
    this.personajeService.addPersonaje(this.newPersonaje).subscribe({
      next: (personaje) => {
        this.personajes.push(personaje);
        this.newPersonaje = { nombre: "", vision: "", arma: "", region: "",img:"" };
      },
      error: (error) => console.error('Error al añadir el personaje', error)
    });
  }

}
