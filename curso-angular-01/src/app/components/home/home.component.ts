import { Component } from '@angular/core';
import { RopaService } from '../../services/ropa.service';

@Component({
   selector: 'home',
   templateUrl: './home.component.html',
   providers: [ RopaService ]
})
export class HomeComponent{
   public title: string;
   public ropa: Array<string>;

   public constructor(
      private _ropaService: RopaService
   ) {

      this.title = 'Home Title';
      this.ropa = [];
   }

   public ngOnInit(): void{
      this.ropa = this._ropaService.findAll();
   }
}
