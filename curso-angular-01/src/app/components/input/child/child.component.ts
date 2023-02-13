import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

   public title:string = 'Componente Hijo';

   @Input('text1')
   public prop1:string;

   @Input('text2')
   public prop2:string;

   @Input()
   public data:any;

  public constructor() { }

  public ngOnInit(): void {
  }

}
