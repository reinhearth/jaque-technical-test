import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(public http: HttpClient) {}

  getUsersJson(): Observable<any> {
    return this.http.get('assets/users.json');
  }

  getRolesJson(): Observable<any> {
    return this.http.get('assets/roles.json');
  }
}
