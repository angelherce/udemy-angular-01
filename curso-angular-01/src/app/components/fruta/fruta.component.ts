import { Component } from '@angular/core';

@Component({
   selector: 'fruta',
   template: `
      <h2>{{name}}</h2>
      <p>{{list}}</p>
   `
})
export class FrutaComponent{
   public name: string = 'Componente de Fruta';
   public list: string = 'Naranja, Manzana, Pera y Sandía';
}
