import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CONFIG } from '../config';
import { Product } from './product.model';

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
}
