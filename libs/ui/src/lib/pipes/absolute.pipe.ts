import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'absolute'
})
export class AbsolutePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (typeof value === 'number')
      ? Math.abs(value)
      : value;
  }

}
