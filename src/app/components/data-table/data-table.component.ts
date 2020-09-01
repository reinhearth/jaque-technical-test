import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  orderAsc: boolean;
  order: string;
  status: string;
  filterStatus: boolean | null;
  search: string;

  constructor() {
    this.orderAsc = true;
    this.order = 'az';
    this.status = '';
    this.search = '';
  }

  ngOnInit(): void {}

  orderList() {
    this.orderAsc = this.order === 'az';
  }

  statusFilter() {
    console.log(this.status);

    switch (this.status) {
      case 'activados':
        this.filterStatus = true;
        break;
      case 'desactivados':
        this.filterStatus = false;
        break;
      default:
        this.filterStatus = null;
        break;
    }
  }
}
