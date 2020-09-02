import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showModal = false;

  title = 'jaque-test';

  sendModal(e: any) {
    this.showModal = e;
  }

  closeModal(e) {
    this.showModal = !e;
  }
}
