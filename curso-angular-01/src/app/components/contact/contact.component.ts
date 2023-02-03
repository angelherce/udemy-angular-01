import { Component } from '@angular/core';

@Component({
   selector: 'contact',
   templateUrl: './contact.component.html'
})
export class ContactComponent {
   public title: string;

   public constructor() {
      this.title = 'Contact Title';
   }
}
