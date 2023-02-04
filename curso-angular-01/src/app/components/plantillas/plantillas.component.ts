import { Component } from '@angular/core';

@Component({
   selector: 'plantillas',
   templateUrl: './plantillas.component.html'
})
export class PlantillasComponent{
   public title: string = `Plantillas Component`;
   public admin: boolean = true;

   public constructor() {}

   public changeAdmin(): void{
      this.admin = !this.admin;
   }
}
