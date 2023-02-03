import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { routing, appRoutingProviders } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { EmployeeComponent } from './components/employee/employee.component';

@NgModule({
   declarations: [
      AppComponent,
      FrutaComponent,
      EmployeeComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      routing
   ],
   providers: [ appRoutingProviders ],
   bootstrap: [ AppComponent ]
})
export class AppModule { }
