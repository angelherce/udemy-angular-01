import { Component } from '@angular/core';

@Component({
   selector: 'fruta',
   templateUrl: './fruta.component.html'
})
export class FrutaComponent{
   public name: string = 'Componente de Fruta';
   public list: string = 'Naranja, Manzana, Pera y Sandía';

   public author: string = 'Ángel';
   public age: number = 30;
   public isAdult: boolean = true;
   public works: Array<string> = [`Carpintero`, `Fontanero`];

   public comodin: any = 'Cualquier Valor';
}
