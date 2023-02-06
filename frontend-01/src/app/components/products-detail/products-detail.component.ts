import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../services/product/product.model';
import { CONFIG } from '../../services/config';
@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {

  public errorMsg: string;

  public id: number;

  public product: Product;

  public urlImages: string = CONFIG.host;

  public imageDefault: string = `uploads/default`;

  public constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private productService: ProductService
  ) {}

  public ngOnInit(): void {
    this._route.params.subscribe( params => this.id = params[`id`] );
    this.productService.findById( this.id )
      .pipe( catchError( ( error: HttpErrorResponse ) => { this.errorMsg = error.message; return of( null ); }))
      .subscribe(response => this.product = response );
  }

}
