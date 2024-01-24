import { CommonModule } from '@angular/common';
import { Component, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PersonajesService } from '../service/personajes.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, CommonModule, FormsModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent{


constructor(private router: Router){};

buscar(buscoNombre :string) {
  console.log("valor desde el navbar: "+buscoNombre)
  this.router.navigate(['buscar/',buscoNombre])
}

}
