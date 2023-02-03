import { Component } from '@angular/core';
import { Car } from './car';

@Component({
   selector: 'car',
   templateUrl: './car.component.html'
})
export class CarComponent{
   public car:Car;
   public carSaved:Car;

   public constructor() {
      this.car = new Car();
   }

   public onSubmit(): void{
      this.carSaved = new Car( this.car.name, this.car.cv, this.car.color );
   }
}
