import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../services/product/product.model';
import {ResultProductService} from "../../services/product/result-product-service.model";

@Component({
  selector: 'app-products-insert',
  templateUrl: './products-insert.component.html',
  styleUrls: ['./products-insert.component.css']
})
export class ProductsInsertComponent implements OnInit {

  public title: string = 'Insertar un Producto';

  public product: Product = new Product();

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

  public onSubmit(): void {
    this.productService.insert( this.product )
      .pipe( catchError( ( error: HttpErrorResponse ) => { this.errorMsg = error.message; return of(  new ResultProductService() ); }))
      .subscribe(response => {
        if( response.affectedRows == 1 ){
          this._router.navigate(['/product-list'])
        }
        else{
          this.errorMsg = `Error al añadir el producto !`;
        }
      });
  }
}
