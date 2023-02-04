import { Component } from '@angular/core';
import { JsonPlaceholderService } from '../../services/json-placeholder.service';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, of } from "rxjs";

@Component({
   selector: 'json-placeholder',
   templateUrl: './json-placeholder.component.html',
   providers: [ JsonPlaceholderService ]
})
export class JsonPlaceholderComponent{
   public title: string = `Json Placeholder Component`;
   public posts: Array<any> = [];

   public constructor(
      private jsonPlaceholderService: JsonPlaceholderService
   ) {}

   public ngOnInit(): void{
      window.setTimeout( () => {
         this.jsonPlaceholderService.findAllPosts()
            .pipe( catchError( ( error: HttpErrorResponse ) => { alert( error.message ); return of(  [] ); }))
            .subscribe(response => this.posts = response );
      }, 5000);
   }
}
