import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addSpacesEveryN',
  standalone: true,
})
export class AddSpacesEveryNPipe implements PipeTransform {
  transform(value = '', n: number): string {
    const arr: string[] = Array.from(value).map((v, i): string => {
      return i % n !== 0 ? v : ' ' + v;
    });
    return arr.join('');
  }
}
