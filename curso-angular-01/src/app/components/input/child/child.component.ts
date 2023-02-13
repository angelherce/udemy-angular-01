import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

   public title:string = 'Componente Hijo';

  public constructor() { }

  public ngOnInit(): void {
  }

}
