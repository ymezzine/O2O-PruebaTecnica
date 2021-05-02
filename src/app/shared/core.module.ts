import { NgModule } from '@angular/core';
import { BeersService } from './services/beers.service';
import { UiTableComponent } from './components/ui/ui-table/ui-table.component';
import {MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    UiTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    UiTableComponent
  ],
  providers: [
    BeersService
  ]
})
export class SharedModule { }
