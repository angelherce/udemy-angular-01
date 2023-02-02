import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
   selector: 'employee',
   templateUrl: './employee.component.html',
   styleUrls: ['./employee.component.css']
})
export class EmployeeComponent{
   public title: string = 'Título del componente Employee';
   public employees: Array<Employee>;

   public color: string;
   public colorSelected: string;

   public constructor() {
      this.employees = [];
      this.employees.push( new Employee( 'Ángel', 30, false ) );
      this.employees.push( new Employee( 'Juan', 25, true ) );
      this.employees.push( new Employee( 'Patricia', 29, false ) );
      this.employees.push( new Employee( 'Sara', 26, true ) );
      this.employees.push( new Employee( 'Manuela', 27, true ) );

      this.color = 'yellow';
      this.colorSelected = 'cyan';
   }

   public switchExternal( employee: Employee ): void{
      employee.setExternal( !employee.isExternal() );
   }
}
