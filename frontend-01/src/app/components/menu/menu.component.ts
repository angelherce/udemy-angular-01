import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public constructor() { }

  public ngOnInit(): void {
    console.log( 'Se ha cargado el componente MenuComponent' );
  }

}
