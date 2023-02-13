import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

   public title:string = 'Componente Padre';

   public data:any = {
      name: "Ángel",
      msg: "Hi World !"
   }

  public constructor() { }

  public ngOnInit(): void {
  }

}
