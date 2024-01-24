import { Routes } from '@angular/router';
import { PersonajesComponent } from './list-personaje/list-personaje.component';
import { IndexComponent } from './index/index.component';
import { FormularioComponent } from './formulario/formulario.component';
import { DetallePersonajeComponent } from './detalle-personaje/detalle-personaje.component';
import { EditarPersonajeComponent } from './editar-personaje/editar-personaje.component';
import { MostrarDetallePersonajeComponent } from './mostrar-detalles-hijo/mostrar-detalles-hijo.component';
import { ListarRegionesComponent } from './listar-regiones/listar-regiones.component';
import { ListarDigimonsComponent } from './listar-digimons/listar-digimons.component';
import { ListarPokemonsComponent } from './listar-pokemons/listar-pokemons.component';
import { AgregarPokemonComponent } from './agregar-pokemon/agregar-pokemon.component';

export const routes: Routes = [

    {path: "", component: IndexComponent},
    {path: "listPersonajes", component: PersonajesComponent, children: [
        {path: "detallesHijo/:id", component: MostrarDetallePersonajeComponent}
    ]},
    {path: "addPersonaje", component: FormularioComponent},
    {path: "editarPersonaje/:id", component: EditarPersonajeComponent},
    {path: "detalles/:id", component: DetallePersonajeComponent},
    {path: "regiones", component: ListarRegionesComponent},
    {path: "digimons", component: ListarDigimonsComponent},
    {path: "pokemons", component: ListarPokemonsComponent},
    {path: "agregarPokemon", component: AgregarPokemonComponent},
    {path: "buscar/:nombre", component: PersonajesComponent},
    {path: "**", component: PersonajesComponent},
    
];
