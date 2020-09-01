import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
})
export class StatusPipe implements PipeTransform {
  transform([...users]: any, active: boolean = null): unknown {
    return active === null
      ? users
      : users.filter((user) => user.active === active);
  }
}
