import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'multiplier'
})
export class MultiplierPipe implements PipeTransform{
   public transform( _multiplicand: number, _multiplier: number ): any {
      return `La multiplicación: "${_multiplicand} x ${_multiplier} = ${_multiplicand * _multiplier}"`;
   }

}
