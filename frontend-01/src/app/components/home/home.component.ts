import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title: string = 'WebApp de Productos con Angular';

  constructor() { }

  ngOnInit(): void {
    console.log( 'Se ha cargado el componente Home' );
  }

}
