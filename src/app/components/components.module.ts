import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { DataTableComponent } from './data-table/data-table.component';
import { UsersListComponent } from './users-list/users-list.component';
import { OrderlistPipe } from '../pipes/orderlist.pipe';
import { StatusPipe } from '../pipes/status.pipe';
import { SearchPipe } from '../pipes/search.pipe';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, BrowserAnimationsModule, DragDropModule],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    UserMenuComponent,
    DataTableComponent,
    UsersListComponent,
    OrderlistPipe,
    StatusPipe,
    SearchPipe,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    UserMenuComponent,
    DataTableComponent,
  ],
})
export class ComponentsModule {}
