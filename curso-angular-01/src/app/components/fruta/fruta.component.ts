import { Component } from '@angular/core';

@Component({
   selector: 'fruta',
   templateUrl: './fruta.component.html'
})
export class FrutaComponent{
   public name: string = 'Componente de Fruta';
   public list: string = 'Naranja, Manzana, Pera y Sandía';
}
