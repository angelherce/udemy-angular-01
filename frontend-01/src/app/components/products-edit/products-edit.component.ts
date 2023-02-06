import { Component, OnInit } from '@angular/core';
import { Product } from '../../services/product/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import {catchError, of} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {ResultProductService} from "../../services/product/result-product-service.model";
import {CONFIG} from "../../services/config";

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {

  public title: string = 'Editar';

  public product: Product = new Product();

  public image: File;

  public errorMsg: string = null;

  public id: number;

  public urlImages: string = CONFIG.host;

  public imageDefault: string = `uploads/default`;

  public constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private productService: ProductService
  ) {}

  public ngOnInit(): void {
    console.log( 'Se ha cargado el componente ProductsEditComponent' );

    this._route.params.subscribe( params => this.id = params[`id`] );

    this.productService.findById( this.id )
      .pipe( catchError( ( error: HttpErrorResponse ) => { this.errorMsg = error.message; return of( null ); }))
      .subscribe(response => this.product = response );
  }

  public onSubmit(): void {
    this.productService.update( this.id, this.product, this.image )
      .pipe( catchError( ( error: HttpErrorResponse ) => { this.errorMsg = error.message; return of(  new ResultProductService() ); }))
      .subscribe(response => {
        if( response.affectedRows == 1 ){
          this._router.navigate([`/product-detail/${this.id}`])
        }
        else{
          this.errorMsg = `Error al añadir el producto !`;
        }
      });
  }

  public addImage( event: any ): void{
    this.image = event.target.files[0];
  }

}
