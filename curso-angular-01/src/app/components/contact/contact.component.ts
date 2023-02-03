import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
   selector: 'contact',
   templateUrl: './contact.component.html'
})
export class ContactComponent {
   public title: string;
   public msg: string;

   public constructor(
      private _route: ActivatedRoute,
      private _router: Router
   ) {

      this.title = 'Contact Title';
      this.msg = '';
   }

   public ngOnInit(): void{
      this._route.params.forEach( (params: Params) => {
         this.msg = params[ 'msg' ];
      });
   }

   public redirect(): void{
      this._router.navigate([ '/contact', 'Hi World !!' ])
   }
}
