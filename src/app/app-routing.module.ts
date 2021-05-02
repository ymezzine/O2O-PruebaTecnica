import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "beers",
    loadChildren: () => import('./modules/beers/beers.module').then(m => m.BeersModule)
  },
  {
    path: "",
    redirectTo: "beers",
    pathMatch: "prefix"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
