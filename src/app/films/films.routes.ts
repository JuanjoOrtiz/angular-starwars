import { Routes } from "@angular/router";


export const FILMS_ROUTES: Routes = [
 {path: 'films', loadComponent: ()=> import('./films-list/films-list.component')  },
 {path: 'film/:id', loadComponent: ()=> import('./films-details/films-details.component')  },


]
