import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], filterString: string, property: string) {
    if (value.length === 0 || !filterString) {
      return value;
    }
    let filteredData: any[] = [];
    for (let user of value) {
      if (user[property].toLowerCase().includes(filterString.toLowerCase())) {
        filteredData.push(user);
      }
    }
    return filteredData;
  }
}
