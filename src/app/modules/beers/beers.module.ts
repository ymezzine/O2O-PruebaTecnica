import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/core.module';
import { BeersRoutingModule } from './beers-routing.module';
import { SearchBeersComponent } from './pages/search-beers/search-beers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    SearchBeersComponent
  ],
  imports: [
      SharedModule,
      BeersRoutingModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule
  ],
  providers: []
})
export class BeersModule { }
