import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform([...users]: any, search: string = ''): unknown {
    return search === ''
      ? users
      : users.filter(
          (user) =>
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase())
        );
  }
}
