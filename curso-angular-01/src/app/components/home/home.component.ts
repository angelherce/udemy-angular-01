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
   public prendaToInsert: string;
   public date: Date;

   public constructor(
      private _ropaService: RopaService
   ) {

      this.title = 'Home Title';
      this.ropa = [];
      this.prendaToInsert = '';
      this.date = new Date( 2023, 1, 10 );
   }

   public ngOnInit(): void{
      this.ropa = this._ropaService.findAll();
   }

   public save(): void{
      this._ropaService.insert( this.prendaToInsert );
      this.prendaToInsert = '';
   }

   public delete( index: number ): void{
      this._ropaService.delete( index );
   }
}
