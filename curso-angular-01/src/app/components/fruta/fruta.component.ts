import { Component } from '@angular/core';

@Component({
   selector: 'fruta',
   templateUrl: './fruta.component.html'
})
export class FrutaComponent{
   public name: string = 'Componente de Fruta';
   public list: string = 'Naranja, Manzana, Pera y Sandía';

   public author: string;
   public age: number;
   public isAdult: boolean;
   public works: Array<string>;
   public comodin: any;

   public constructor() {
      this.author = 'Ángel';
      this.age = 30;
      this.isAdult = true;
      this.works = [`Carpintero`, `Fontanero`];
      this.comodin = 'Cualquier Valor';
      this.greeting( 'NgOnInit', this.name );
   }

   public ngOnInit(): void{
      this.greeting( 'constructor', this.name );
   }

   public greeting( source: string, name: string ): void{
      alert( `${source}: Hola ${name} !!!` );
   }
}
