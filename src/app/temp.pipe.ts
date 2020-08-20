import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp'
})
export class TempPipe implements PipeTransform {

  transform(value: number, args: string): unknown {
    
    if (args === 'F') {
      return Math.round(value * 9.0 / 5.0 + 32) + "°F";
    } else if (args === 'C') {
      return Math.round((value - 32) * 5.0 / 9.0) + "°C";
    } else {
      throw new Error('Not a valid scale');
    }
  }

}
