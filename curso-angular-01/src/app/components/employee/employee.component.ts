import { Component } from '@angular/core';

@Component({
   selector: 'employee',
   templateUrl: './employee.component.html'
})
export class EmployeeComponent{
   public title: string = 'Título del componente Employee';
}
