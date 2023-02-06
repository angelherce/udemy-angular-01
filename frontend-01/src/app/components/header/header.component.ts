import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public title: string = 'Productos Angular';

  public HEADER_BG_COLOR: string = '#E03137';

  public constructor() { }

  public ngOnInit(): void {
    console.log( 'Se ha cargado el componente HeaderComponent' );
  }

}
