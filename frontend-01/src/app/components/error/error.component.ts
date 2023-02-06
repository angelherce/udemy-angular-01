import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  public title: string = 'Página no encontrada !';
  constructor() { }

  ngOnInit(): void {
    console.log( `Se ha cargado el componente Error` );
  }

}
