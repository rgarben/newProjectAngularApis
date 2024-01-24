import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Personaje } from '../interfaces/personaje';
import { PersonajesService } from '../service/personajes.service';

@Component({
  selector: 'app-mostrar-detalles-hijo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mostrar-detalles-hijo.component.html'
})
export class MostrarDetallePersonajeComponent implements OnChanges {

  @Input("id") id!: number;
  
  personaje!: Personaje;
  
  constructor (private personajesService: PersonajesService){};
  
  ngOnChanges(): void {
    
  this.personajesService.getPersonajePorId(this.id).subscribe({
    next: (personaje) =>{ this.personaje = personaje; console.log(this.personaje)}
    
  })
}
}