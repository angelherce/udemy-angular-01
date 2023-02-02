import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
   selector: 'employee',
   templateUrl: './employee.component.html'
})
export class EmployeeComponent{
   public title: string = 'Título del componente Employee';
   public employee: Array<Employee>;

   public constructor() {
      this.employee = [];
      this.employee.push( new Employee( 'Ángel', 30 ) );
      this.employee.push( new Employee( 'Juan', 25 ) );
      this.employee.push( new Employee( 'Patricia', 29 ) );
      this.employee.push( new Employee( 'Sara', 26 ) );
      this.employee.push( new Employee( 'Manuela', 27 ) );
   }
}
