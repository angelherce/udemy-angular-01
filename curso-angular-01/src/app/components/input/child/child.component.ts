import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

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

   @Output()
   public dataFromChild:EventEmitter<any> = new EventEmitter();

  public constructor() { }

  public ngOnInit(): void {
  }

  public send( event:any ): void{
     this.dataFromChild.emit({ msg: "Hi World From Child !" });
  }
}
