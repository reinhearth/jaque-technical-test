import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Output() modalClose = new EventEmitter();
  color: ThemePalette = 'primary';
  constructor() {}

  ngOnInit(): void {}

  closeModal() {
    this.modalClose.emit(true);
  }
}
