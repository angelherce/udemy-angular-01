import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
   selector: 'contact',
   templateUrl: './contact.component.html'
})
export class ContactComponent {
   public title: string;
   public msg: string;

   public constructor(
      private _route: ActivatedRoute
   ) {

      this.title = 'Contact Title';
      this.msg = '';
   }

   public ngOnInit(): void{
      this._route.params.forEach( (params: Params) => {
         this.msg = params[ 'msg' ];
      });
   }
}
