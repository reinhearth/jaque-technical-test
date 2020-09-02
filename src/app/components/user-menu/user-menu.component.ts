import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent implements OnInit {
  @Output() modalOpen = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  openModal() {
    this.modalOpen.emit(true);
  }
}
