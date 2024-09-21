import { Routes } from "@angular/router";


export const PLANTES_ROUTES: Routes = [
 {path: 'planets', loadComponent: ()=> import('./planets-list/planets-list.component')  },
 {path: 'film/:id', loadComponent: ()=> import('./planets-details/planets-details.component')  },


]
