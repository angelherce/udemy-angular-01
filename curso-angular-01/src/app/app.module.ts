import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

import { MultiplierPipe } from './pipes/multiplier.pipe';
import { CarComponent } from './components/car/car.component';
import { HttpClientModule } from '@angular/common/http';
import { JsonPlaceholderComponent } from './components/json-placeholder/json-placeholder.component';
import { PlantillasComponent } from './components/plantillas/plantillas.component';

@NgModule({
   declarations: [
      AppComponent,
      FrutaComponent,
      EmployeeComponent,
      ContactComponent,
      HomeComponent,
      CarComponent,
      JsonPlaceholderComponent,
      PlantillasComponent,
      MultiplierPipe
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
