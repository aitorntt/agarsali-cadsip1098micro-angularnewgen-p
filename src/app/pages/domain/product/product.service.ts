import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { product } from './product';

@Injectable({
  providedIn: 'root'
})
export class productService {

  public productBackUrl: string = environment.backUrl + '/' + 'product';


  constructor(private http: HttpClient) {
  }

  // Fetch all objects product
  getObjectsproduct(): Observable<product[]> {
    return this.http.get<product[]>(
      this.productBackUrl + 's'
    );
  }

  getObjectsproductPag(
    page: number,
    size: number
  ): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(
      this.productBackUrl + 's/' + page + '/' + size,
      { observe: 'response' }
    );
  }

  // Fetch objects product by id without relationships
  getObjectsproductWithoutRelationships(): Observable<product[]> {
    return this.http.get<product[]>(
      this.productBackUrl + '/productsWithOutRelationships'
    );
  }

  getObjectsproductWithoutRelationshipsPag(
    page: number,
    size: number
  ): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(
      `${this.productBackUrl}sWithoutRelationships/${page + 1}/${size}`,
      { observe: 'response' }
    );
  }

  // Create object product
  createObjectproduct(
    objectproduct: product
  ): Observable<product> {
    return this.http.post(
      this.productBackUrl,
      objectproduct
    );
  }

  // Fetch object product by id
  getObjectproductById(
    id: number
  ): Observable<product> {
    return this.http.get<product>(
      this.productBackUrl + '/' + id
    );
  }

  // Fetch object product by id without relationships
  getObjectproductWithoutRelationships(
    id: number
  ): Observable<product> {
    return this.http.get<product>(
      this.productBackUrl + 'WithoutRelationships' + '/' + id
    );
  }

  // Update object product
  updateObjectproduct(
    objectproduct: product
  ): Observable<product> {
    return this.http.put<product>(
      this.productBackUrl + '/' + objectproduct.id,
      objectproduct
    );
  }

  // Delete object product
  deleteObjectproduct(
    id: number
  ): Observable<product> {
    return this.http.delete(
      this.productBackUrl + '/' + id
    );
  }

}
