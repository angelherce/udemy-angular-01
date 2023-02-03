import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import {CarComponent} from './components/car/car.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'home', component: HomeComponent },
   { path: 'car', component: CarComponent },
   { path: 'contact', component: ContactComponent },
   { path: 'contact/:msg', component: ContactComponent },
   { path: 'employee', component: EmployeeComponent },
   { path: 'fruta', component: FrutaComponent },
   { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
