import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../services/product/product.model';
import { CONFIG } from '../../services/config';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  public title: string = 'Listado de Productos';

  public errorMsg: string = null;

  public products: Array<Product> = [];

  public urlImages: string = CONFIG.host;

  public imageDefault: string = `uploads/default`;

  public constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private productService: ProductService
  ) { }

  public ngOnInit(): void {
    console.log( 'Se ha cargado el componente ProductsListComponent' );

    this.productService.findAll()
      .pipe( catchError( ( error: HttpErrorResponse ) => { this.errorMsg = error.message; return of(  [] ); }))
      .subscribe(response => this.products = response );
  }

}
