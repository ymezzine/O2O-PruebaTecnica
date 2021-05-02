import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-table',
  templateUrl: './ui-table.component.html',
  styleUrls: ['./ui-table.component.scss']
})
export class UiTableComponent implements OnInit {

  @Input() data: any[] = [];
  @Input() columns: any[] = [];

  displayedColumns: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.displayedColumns = this.columns.map(x => x.name);
    console.log(this.displayedColumns)
  }

}
