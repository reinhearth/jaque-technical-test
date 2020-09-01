import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  @Input() orderAsc;
  @Input() filterStatus;
  @Input() search;
  users = [
    {
      picture: 'http://www.fillmurray.com/200/300',
      name: 'Oscar',
      fathersLastName: 'Rubio',
      mothersLastName: 'Mendoza',
      email: 'oscar.oscar@gmail.com',
      roleId: 1,
      active: false,
    },
    {
      picture: 'http://www.fillmurray.com/201/300',
      name: 'Manuel',
      fathersLastName: 'Mendez',
      mothersLastName: 'Alvaro',
      email: 'manu.manu@gmail.com',
      roleId: 2,
      active: false,
    },
    {
      picture: 'http://www.fillmurray.com/202/300',
      name: 'Luis',
      fathersLastName: 'Monti',
      mothersLastName: 'Arenas',
      email: 'luis.luis.luis.luisluis.luis.luis.luis@gmail.com',
      roleId: 3,
      active: true,
    },
    {
      picture: 'http://www.fillmurray.com/203/300',
      name: 'Omasr',
      fathersLastName: 'Cruz',
      mothersLastName: 'Vega',
      email: 'omar.omar@gmail.com',
      roleId: 3,
      active: false,
    },
    {
      picture: 'http://www.fillmurray.com/204/300',
      name: 'Mike',
      fathersLastName: 'Gonzales',
      mothersLastName: 'Lopez',
      email: 'mike.mike@gmail.com',
      roleId: 3,
      active: true,
    },
    {
      picture: 'http://www.fillmurray.com/205/300',
      name: 'Roberto',
      fathersLastName: 'Lime',
      mothersLastName: 'Pic',
      email: 'robe.robe@gmail.com',
      roleId: 2,
      active: false,
    },
    {
      picture: 'http://www.fillmurray.com/206/300',
      name: 'Alfredo',
      fathersLastName: 'Luju',
      mothersLastName: 'Bla',
      email: 'alf.alf@gmail.com',
      roleId: 3,
      active: false,
    },
    {
      picture: 'http://www.fillmurray.com/207/300',
      name: 'Betito',
      fathersLastName: 'Alya',
      mothersLastName: 'Vasa',
      email: 'alya.vasa@gmail.com',
      roleId: 3,
      active: true,
    },
    {
      picture: 'http://www.fillmurray.com/208/300',
      name: 'Clau',
      fathersLastName: 'Rodriguez',
      mothersLastName: 'Sanches',
      email: 'clau.clau@gmail.com',
      roleId: 2,
      active: false,
    },
    {
      picture: 'http://www.fillmurray.com/209/300',
      name: 'Federico',
      fathersLastName: 'Hernández',
      mothersLastName: 'Del Valle',
      email: 'fed.fed@gmail.com',
      roleId: 2,
      active: true,
    },
    {
      picture: 'http://www.fillmurray.com/210/300',
      name: 'Shi',
      fathersLastName: 'Rubios',
      mothersLastName: 'Mendozas',
      email: 'oscar.oscar@gmail.com',
      roleId: 2,
      active: true,
    },
    {
      picture: 'http://www.fillmurray.com/200/300',
      name: 'Javier',
      fathersLastName: 'Perez',
      mothersLastName: 'Perez',
      email: 'javi.javi@gmail.com',
      roleId: 3,
      active: false,
    },
    {
      picture: 'http://www.fillmurray.com/200/300',
      name: 'Jorge',
      fathersLastName: 'Federico',
      mothersLastName: 'Gutierrez',
      email: 'george@gmail.com',
      roleId: 2,
      active: true,
    },
    {
      picture: 'http://www.fillmurray.com/200/300',
      name: 'Lulu',
      fathersLastName: 'Soprana',
      mothersLastName: 'Diaz',
      email: 'asdasd.asd@gmail.com',
      roleId: 2,
      active: false,
    },
    {
      picture: 'http://www.fillmurray.com/200/300',
      name: 'Norberto',
      fathersLastName: 'Enriquez',
      mothersLastName: 'Segobiano',
      email: 'norb.norb@gmail.com',
      roleId: 2,
      active: false,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  drop(event: CdkDragDrop<any[]>): void {
    console.log(event);

    const prevIndex = this.users.findIndex((d, e) => e === event.currentIndex);
    moveItemInArray(this.users, prevIndex, event.currentIndex);
    this.users = [...this.users];
  }
}
