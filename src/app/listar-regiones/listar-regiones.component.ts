import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegionesService } from '../service/regiones.service';
import { Region } from '../interfaces/regiones';
import { PersonajesService } from '../service/personajes.service';
import { Personaje } from '../interfaces/personaje';

@Component({
  selector: 'app-listar-regiones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './listar-regiones.component.html',
  styleUrl: './listar-regiones.component.css',
})
export class ListarRegionesComponent implements OnInit {

  regiones: Region[] = [];

  personajes: Personaje[] = [];

constructor(private regionService: RegionesService, private personajesService: PersonajesService){};

ngOnInit(): void {
  this.regionService.getRegiones().subscribe({
    next: (regiones) => this.regiones = regiones
  });

  this.personajesService.getPersonajes().subscribe({
    next: (personajes) => this.personajes = personajes
  });
}

}
