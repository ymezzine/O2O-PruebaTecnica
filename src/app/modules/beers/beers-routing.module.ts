import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBeersComponent } from './pages/search-beers/search-beers.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "search",
    pathMatch: "full"
  },
  {
    path: "search",
    component: SearchBeersComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeersRoutingModule { }
