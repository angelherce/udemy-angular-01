import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../services/product/product.model';
import { CONFIG } from '../../services/config';
import {ResultProductService} from "../../services/product/result-product-service.model";

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

    this.fillProducts();
  }

  public fillProducts(): void{
    this.productService.findAll()
      .pipe( catchError( ( error: HttpErrorResponse ) => { this.errorMsg = error.message; return of(  [] ); }))
      .subscribe(response => this.products = response );
  }

  public deleteProduct( product: Product ){
    if( window.confirm( `Estas seguro que quieres borrar el producto con nombre "${product.name}"`)) {
      this.productService.delete(product.id)
        .pipe(catchError((error: HttpErrorResponse) => {
          this.errorMsg = error.message;
          return of(new ResultProductService());
        }))
        .subscribe(response => {
          if (response.affectedRows != 0) {
            this.fillProducts();
          } else {
            this.errorMsg = `Error al Borrar el producto !`;
          }
        });
    }
  }

}
