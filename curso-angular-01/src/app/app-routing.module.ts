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

export const appRoutingProviders: Array<any> = [];
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot( routes );
