import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CONFIG } from '../config';
import { Product } from './product.model';
import { ResultProductService } from './result-product-service.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public host: string = CONFIG.host;

  public constructor(
    private http: HttpClient
  ) {}

  public findAll(): Observable<Product[]>{
    const URL = `${this.host}/product`;
    return this.http.get<Product[]>( URL );
  }

  public findById( id: number ): Observable<Product>{
    const URL = `${this.host}/product/${id}`;
    return this.http.get<Product>( URL );
  }

  public insert( product: Product, image: File ): Observable<ResultProductService>{
    const FORM_DATA = new FormData();
    product.name != undefined && FORM_DATA.append( 'name', `${product.name}` );
    product.description != undefined && FORM_DATA.append( 'description', `${product.description}` );
    product.price != undefined && FORM_DATA.append( 'price', `${product.price}` );
    image != undefined && image != null && FORM_DATA.append( 'image', image, image.name );

    const URL = `${this.host}/product`;
    return this.http.post<ResultProductService>( URL, FORM_DATA );
  }

  public update( id: number, product: Product, image: File ): Observable<ResultProductService>{
    const FORM_DATA = new FormData();
    product.name != undefined && FORM_DATA.append( 'name', `${product.name}` );
    product.description != undefined && FORM_DATA.append( 'description', `${product.description}` );
    product.price != undefined && FORM_DATA.append( 'price', `${product.price}` );
    image != undefined && image != null && FORM_DATA.append( 'image', image, image.name );

    const URL = `${this.host}/product/${id}`;
    return this.http.put<ResultProductService>( URL, FORM_DATA );
  }
}
