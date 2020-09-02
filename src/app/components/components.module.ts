import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { MatPaginatorModule } from '@angular/material/paginator';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { DataTableComponent } from './data-table/data-table.component';
import { UsersListComponent } from './users-list/users-list.component';
import { OrderlistPipe } from '../pipes/orderlist.pipe';
import { StatusPipe } from '../pipes/status.pipe';
import { SearchPipe } from '../pipes/search.pipe';
import { PaginatorPipe } from '../pipes/paginator.pipe';

import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatPaginatorModule,
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    UserMenuComponent,
    DataTableComponent,
    UsersListComponent,
    OrderlistPipe,
    StatusPipe,
    SearchPipe,
    PaginatorPipe,
    ModalComponent,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    UserMenuComponent,
    DataTableComponent,
    ModalComponent,
  ],
})
export class ComponentsModule {}
