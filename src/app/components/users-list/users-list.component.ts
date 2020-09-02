import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { UsersService } from '../../services/users.service';
import { exhaustMap, take } from 'rxjs/operators';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @Input() orderAsc;
  @Input() filterStatus;
  @Input() search;
  pageSize: any;
  pageNumber: any;

  userData = [];
  rolesData = [];
  users = [];
  constructor(private userService: UsersService) {
    this.pageSize = 5;
    this.pageNumber = 1;
    this.gettingUsers();
  }

  ngOnInit(): void {
    this.paginator._intl.itemsPerPageLabel = 'Usuarios Por Pagina';
  }

  drop(event: CdkDragDrop<any[]>): void {
    console.log(event);

    const prevIndex = this.users.findIndex((d, e) => e === event.currentIndex);
    moveItemInArray(this.users, prevIndex, event.currentIndex);
    this.users = [...this.users];
  }

  handlePage(e: PageEvent): void {
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex + 1;
  }

  gettingUsers(): void {
    this.userService
      .getRolesJson()
      .pipe(
        exhaustMap((response) => {
          this.rolesData = response.roles;
          return this.userService.getUsersJson();
        })
      )
      .subscribe((response) => {
        this.userData = response.users;
        this.users = this.userData.map((user) => {
          return this.findRoleName(user);
        });
      });
  }

  findRoleName(user: any): any {
    const role = this.rolesData.find((rol: any) => rol.id === user.roleId);
    const roleName = role.position;
    return { ...user, roleName };
  }
}
