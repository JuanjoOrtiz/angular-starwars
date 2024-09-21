import { Routes } from "@angular/router";


export const STARSHIPS_ROUTES: Routes = [
 {path: 'starships', loadChildren: ()=> import('./starships-list/starships-list.component')  },
 {path: 'starship/:id', loadChildren: ()=> import('./starships-details/starships-details.component')  },


]
