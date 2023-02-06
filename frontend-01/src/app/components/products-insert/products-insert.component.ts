import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../services/product/product.model';

@Component({
  selector: 'app-products-insert',
  templateUrl: './products-insert.component.html',
  styleUrls: ['./products-insert.component.css']
})
export class ProductsInsertComponent implements OnInit {

  public title: string = 'Insertar un Producto';

  public errorMsg: string = null;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private productService: ProductService
  ) { }

  public ngOnInit(): void {
    console.log( 'Se ha cargado el componente ProductsInsertComponent' );

    // this.productService.findAll()
    //   .pipe( catchError( ( error: HttpErrorResponse ) => { this.errorMsg = error.message; return of(  [] ); }))
    //   .subscribe(response => this.products = response );
  }

}
