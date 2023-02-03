import {ModuleWithProviders, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { FrutaComponent } from "./components/fruta/fruta.component";

const routes: Routes = [
   { path: '', component: EmployeeComponent },
   { path: 'employee', component: EmployeeComponent },
   { path: 'fruta', component: FrutaComponent },
   { path: '**', component: EmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
