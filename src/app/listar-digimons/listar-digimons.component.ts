import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Digimon } from '../interfaces/digimon';
import { DigimonsService } from '../service/digimonss.service';

@Component({
  selector: 'app-listar-digimons',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './listar-digimons.component.html',
  styleUrl: './listar-digimons.component.css',
})
export class ListarDigimonsComponent implements OnInit{

  digimons: Digimon[] = [];

  constructor(private digimonsService: DigimonsService){};

  ngOnInit(): void {
    this.digimonsService.getDigimons().subscribe({
      next: (digimons) => this.digimons = digimons
    })
  }


}
