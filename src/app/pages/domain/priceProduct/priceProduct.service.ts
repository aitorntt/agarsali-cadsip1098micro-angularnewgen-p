import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { priceProduct } from './priceProduct';

@Injectable({
  providedIn: 'root'
})
export class priceProductService {

  public priceProductBackUrl: string = environment.backUrl + '/' + 'priceProduct';


  constructor(private http: HttpClient) {
  }

  // Fetch all objects priceProduct
  getObjectspriceProduct(): Observable<priceProduct[]> {
    return this.http.get<priceProduct[]>(
      this.priceProductBackUrl + 's'
    );
  }

  getObjectspriceProductPag(
    page: number,
    size: number
  ): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(
      this.priceProductBackUrl + 's/' + page + '/' + size,
      { observe: 'response' }
    );
  }

  // Fetch objects priceProduct by id without relationships
  getObjectspriceProductWithoutRelationships(): Observable<priceProduct[]> {
    return this.http.get<priceProduct[]>(
      this.priceProductBackUrl + '/priceProductsWithOutRelationships'
    );
  }

  getObjectspriceProductWithoutRelationshipsPag(
    page: number,
    size: number
  ): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(
      `${this.priceProductBackUrl}sWithoutRelationships/${page + 1}/${size}`,
      { observe: 'response' }
    );
  }

  // Create object priceProduct
  createObjectpriceProduct(
    objectpriceProduct: priceProduct
  ): Observable<priceProduct> {
    return this.http.post(
      this.priceProductBackUrl,
      objectpriceProduct
    );
  }

  // Fetch object priceProduct by id
  getObjectpriceProductById(
    id: number
  ): Observable<priceProduct> {
    return this.http.get<priceProduct>(
      this.priceProductBackUrl + '/' + id
    );
  }

  // Fetch object priceProduct by id without relationships
  getObjectpriceProductWithoutRelationships(
    id: number
  ): Observable<priceProduct> {
    return this.http.get<priceProduct>(
      this.priceProductBackUrl + 'WithoutRelationships' + '/' + id
    );
  }

  // Update object priceProduct
  updateObjectpriceProduct(
    objectpriceProduct: priceProduct
  ): Observable<priceProduct> {
    return this.http.put<priceProduct>(
      this.priceProductBackUrl + '/' + objectpriceProduct.id,
      objectpriceProduct
    );
  }

  // Delete object priceProduct
  deleteObjectpriceProduct(
    id: number
  ): Observable<priceProduct> {
    return this.http.delete(
      this.priceProductBackUrl + '/' + id
    );
  }

}
