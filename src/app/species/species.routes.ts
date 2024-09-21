import { Routes } from "@angular/router";


export const SPECIES_ROUTES: Routes = [
 {path: 'species', loadChildren: ()=> import('./species-list/species-list.component')  },
 {path: 'specie/:id', loadChildren: ()=> import('./species-details/species-details.component')  },


]
