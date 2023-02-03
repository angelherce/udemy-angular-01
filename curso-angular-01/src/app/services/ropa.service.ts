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
}
