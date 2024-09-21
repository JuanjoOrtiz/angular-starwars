import { Routes } from "@angular/router";


export const PEOPLE_ROUTES: Routes = [
 {path: 'people', loadComponent: ()=> import('./people-list/people-list.component')  },
 {path: 'people/:id', loadComponent: ()=> import('./people-details/people-details.component')  },


]
