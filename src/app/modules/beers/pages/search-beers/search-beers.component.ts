import { Component, OnInit } from '@angular/core';
import { BeersService } from 'src/app/shared/services/beers.service';
import { BeerCriteria } from 'src/app/shared/models/beers-criteria';
import { map } from 'rxjs/operators'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-beers',
  templateUrl: './search-beers.component.html',
  styleUrls: ['./search-beers.component.scss']
})
export class SearchBeersComponent implements OnInit {

  columns!: any[];
  data!: any[];

  searchForm!: FormGroup;

  constructor(private beersService: BeersService) {
    this.searchForm = new FormGroup({
      food: new FormControl()
    });
  }

  ngOnInit(): void {
    this.columns = [
      { label: "ID", name: "id" },
      { label: "Nombre", name: "name" },
      { label: "Etiqueta", name: "tagline"},
      { label: "Contribuido", name: "contributed_by"},
      { label: "Elaborado", name: "first_brewed"},
      { label: "Cantidad", name: "_volume"}
    ];

    this.getData();
  }

  search(){
    let criteria: BeerCriteria = this.searchForm.value;
    if(criteria.food){
      criteria.food = criteria.food.replace(" ", "_");
    }
    this.getData(criteria);
  }

  reset(){
    this.searchForm.reset();
    this.getData();
  }

  private getData(criteria: any = null) {
    this.beersService.search(criteria)
      .pipe(map((data: any[]) => {
        return data.map(x => {
          let _volume = "";
          if(x.volume){
            if(x.volume.value) _volume = x.volume.value;
            if(x.volume.unit) _volume = `${_volume} ${x.volume.unit}`;
            x._volume = _volume;
          }

          return x;
        })
      }))
      .subscribe(
        data => {
          this.data = data;
          console.log(this.data);
        },
        err => console.log(err)
      );
  }

}
