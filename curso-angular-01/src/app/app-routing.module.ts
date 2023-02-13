import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { CarComponent } from './components/car/car.component';
import { JsonPlaceholderComponent } from './components/json-placeholder/json-placeholder.component';
import { PlantillasComponent } from './components/plantillas/plantillas.component';
import { ChildComponent } from './components/input/child/child.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'home', component: HomeComponent },
   { path: 'json-placeholder', component: JsonPlaceholderComponent },
   { path: 'plantillas', component: PlantillasComponent },
   { path: 'car', component: CarComponent },
   { path: 'contact', component: ContactComponent },
   { path: 'contact/:msg', component: ContactComponent },
   { path: 'employee', component: EmployeeComponent },
   { path: 'fruta', component: FrutaComponent },
   { path: 'input/child', component: ChildComponent },
   { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
