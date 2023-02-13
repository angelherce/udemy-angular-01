import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JsonPlaceholderService {
   public host: string = `https://jsonplaceholder.typicode.com`;

   public constructor(
      private http: HttpClient
   ) {}

   public findAllPosts(): Observable<object[]>{
      const URL = `${this.host}/posts`;
      return this.http.get<object[]>( URL );
   }
}
