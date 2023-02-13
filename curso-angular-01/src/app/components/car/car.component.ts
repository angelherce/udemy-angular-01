import { Component } from '@angular/core';
import { Car } from './car';

@Component({
   selector: 'car',
   templateUrl: './car.component.html'
})
export class CarComponent{
   public car:Car;
   public cars: Array<Car>;

   public constructor() {
      this.car = new Car();
      this.cars = [];
   }

   public ngOnInit(): void{
      this.cars.push( new Car( 'Seat Panda', 120, 'rojo' ));
      this.cars.push( new Car( 'Renault Clio', 110, 'azul' ));
   }

   public onSubmit(): void{
      this.cars.push( new Car( this.car.name, this.car.cv, this.car.color ));
   }
}
