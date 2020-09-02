import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Output() modalClose = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  closeModal() {
    this.modalClose.emit(true);
  }
}