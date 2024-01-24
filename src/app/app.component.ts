
import { HttpClientModule } from '@angular/common/http';
import { PersonajesComponent } from './list-personaje/list-personaje.component';
import { PersonajesService } from './service/personajes.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { Personaje } from './interfaces/personaje';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, RouterLink, RouterLinkActive, FormsModule, FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'angularEjercice';

  ngOnInit() {
    
  } 

  
}
