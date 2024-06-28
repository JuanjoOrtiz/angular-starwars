import { Routes } from '@angular/router';
import { PeopleComponent } from './pages/people/people/people.component';


export const routes: Routes = [
  {path: 'people', component: PeopleComponent },
  {path: 'films',  loadComponent: ()=> import('./pages/films/films/films.component').then(c => c.FilmsComponent) },
  {path: 'vehicles', loadComponent: ()=> import('./pages/vehicles/vehicles/vehicles.component').then(c => c.VehiclesComponent) },
  {path: 'starships', loadComponent: ()=> import('./pages/starships/starships/starships.component').then(c => c.StarshipsComponent)  },
  {path: 'species', loadComponent: ()=> import('./pages/species/species/species.component').then(c => c.SpeciesComponent)  },
  {path: 'planets', loadComponent: ()=> import('./pages/planets/planets/planets.component').then(c => c.PlanetsComponent)  },
  {path: '**', redirectTo: 'people' },

];
