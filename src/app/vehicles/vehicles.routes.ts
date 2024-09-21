import { Routes } from "@angular/router";


export const VEHICLES_ROUTES: Routes = [
 {path: 'vehicles', loadChildren: ()=> import('./vehicles-list/vehicles-list.component')  },
 {path: 'vehicle/:id', loadChildren: ()=> import('./vehicles-details/vehicles-details.component')  },


]
