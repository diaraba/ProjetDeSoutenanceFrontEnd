import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creerprofil'
})
export class CreerprofilPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
