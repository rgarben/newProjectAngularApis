import { Component, Input, OnInit, input } from '@angular/core';
import { Personaje } from '../interfaces/personaje';
import { PersonajesService } from '../service/personajes.service';

@Component({
  selector: 'app-detalle-personaje',
  standalone: true,
  imports: [],
  templateUrl: './detalle-personaje.component.html'
})
export class DetallePersonajeComponent implements OnInit {

@Input("id") id!: number;

personaje!: Personaje;

constructor (private personajesService: PersonajesService){};

ngOnInit(): void {
  
this.personajesService.getPersonajePorId(this.id).subscribe({
  next: (personaje) => this.personaje = personaje
})

}

}
