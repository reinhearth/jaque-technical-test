import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderlist',
})
export class OrderlistPipe implements PipeTransform {
  transform([...value]: any, asc: boolean = true): string {
    if (asc) {
      return value.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    }

    return value.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      return 0;
    });
  }
}
