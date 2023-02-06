import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  public title: string = 'Listado de Productos';

  public constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  public ngOnInit(): void {
    console.log( 'Se ha cargado el componente ProductsListComponent' );
  }

}
