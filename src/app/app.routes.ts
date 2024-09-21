import { Routes } from '@angular/router';



export const routes: Routes = [
  { path: 'people', loadChildren: () => import('./people/people.routes').then(r => r.PEOPLE_ROUTES) },
  { path: 'films', loadChildren: () => import('./films/films.routes').then(r => r.FILMS_ROUTES) },
  { path: 'vehicles', loadChildren: () => import('./vehicles/vehicles.routes').then(r => r.VEHICLES_ROUTES) },
  { path: 'starships', loadChildren: () => import('./starships/starships.routes').then(r => r.STARSHIPS_ROUTES) },
  { path: 'species', loadChildren: () => import('./species/species.routes').then(c => c.SPECIES_ROUTES) },
  { path: 'planets', loadChildren: () => import('./planets/planets.routes').then(r => r.PLANTES_ROUTES) },
  { path: '**', redirectTo: 'people' },

];


