import { Injectable } from '@angular/core';

@Injectable()
export class RopaService{

   private data: Array<string>;

   public constructor() {
      this.data = ['Camiseta', 'Pantalones', 'Zapatos', 'Gorra'];
   }

   public findAll(): Array<string>{
      return this.data;
   }

   public insert( ropa: string ): void{
      this.data.push( ropa );
   }

   public delete( index: number ): void{
      this.data.splice( index, 1 );
   }
}
