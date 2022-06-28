import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { typeProduct } from './typeProduct';

@Injectable({
  providedIn: 'root'
})
export class typeProductService {

  public typeProductBackUrl: string = environment.backUrl + '/' + 'typeProduct';


  constructor(private http: HttpClient) {
  }

  // Fetch all objects typeProduct
  getObjectstypeProduct(): Observable<typeProduct[]> {
    return this.http.get<typeProduct[]>(
      this.typeProductBackUrl + 's'
    );
  }

  getObjectstypeProductPag(
    page: number,
    size: number
  ): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(
      this.typeProductBackUrl + 's/' + page + '/' + size,
      { observe: 'response' }
    );
  }

  // Fetch objects typeProduct by id without relationships
  getObjectstypeProductWithoutRelationships(): Observable<typeProduct[]> {
    return this.http.get<typeProduct[]>(
      this.typeProductBackUrl + '/typeProductsWithOutRelationships'
    );
  }

  getObjectstypeProductWithoutRelationshipsPag(
    page: number,
    size: number
  ): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(
      `${this.typeProductBackUrl}sWithoutRelationships/${page + 1}/${size}`,
      { observe: 'response' }
    );
  }

  // Create object typeProduct
  createObjecttypeProduct(
    objecttypeProduct: typeProduct
  ): Observable<typeProduct> {
    return this.http.post(
      this.typeProductBackUrl,
      objecttypeProduct
    );
  }

  // Fetch object typeProduct by id
  getObjecttypeProductById(
    id: number
  ): Observable<typeProduct> {
    return this.http.get<typeProduct>(
      this.typeProductBackUrl + '/' + id
    );
  }

  // Fetch object typeProduct by id without relationships
  getObjecttypeProductWithoutRelationships(
    id: number
  ): Observable<typeProduct> {
    return this.http.get<typeProduct>(
      this.typeProductBackUrl + 'WithoutRelationships' + '/' + id
    );
  }

  // Update object typeProduct
  updateObjecttypeProduct(
    objecttypeProduct: typeProduct
  ): Observable<typeProduct> {
    return this.http.put<typeProduct>(
      this.typeProductBackUrl + '/' + objecttypeProduct.id,
      objecttypeProduct
    );
  }

  // Delete object typeProduct
  deleteObjecttypeProduct(
    id: number
  ): Observable<typeProduct> {
    return this.http.delete(
      this.typeProductBackUrl + '/' + id
    );
  }

}
