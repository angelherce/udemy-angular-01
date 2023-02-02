import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
   selector: 'employee',
   templateUrl: './employee.component.html',
   styleUrls: ['./employee.component.css']
})
export class EmployeeComponent{
   public title: string = 'Título del componente Employee';
   public employee: Array<Employee>;

   public constructor() {
      this.employee = [];
      this.employee.push( new Employee( 'Ángel', 30, false ) );
      this.employee.push( new Employee( 'Juan', 25, true ) );
      this.employee.push( new Employee( 'Patricia', 29, false ) );
      this.employee.push( new Employee( 'Sara', 26, true ) );
      this.employee.push( new Employee( 'Manuela', 27, true ) );
   }

   public switchExternal( employee: Employee ): void{
      employee.setExternal( !employee.isExternal() );
   }
}
