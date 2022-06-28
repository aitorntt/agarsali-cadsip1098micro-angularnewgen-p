import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class showProductsService {


  constructor(private http: HttpClient) { }

  deleteProduct(id: any): Observable<any> {
    const data: string = JSON.stringify({
      id: id
    }, (k, v) => v === undefined ? null : v
    );
    const httpOptions = {
      observe: 'body',
    };
    return this.http.post<any>(
      `${environment.backUrl}/delete-product`
      , data
      , { ...httpOptions, observe: 'response' }
    );
  }

  inputObjects(product: any, prices: any): Observable<any> {
    const data: string = JSON.stringify({
      product: product,
      prices: prices
    }, (k, v) => v === undefined ? null : v
    );
    const httpOptions = {
      observe: 'body',
    };
    return this.http.post<any>(
      `${environment.backUrl}/testingObjects_bc/saveProduct`
      , data
      , { ...httpOptions, observe: 'response' }
    );
  }

  showProducts(typeId: any): Observable<any> {
    const data: string = JSON.stringify({
      typeId: typeId
    }, (k, v) => v === undefined ? null : v
    );
    const httpOptions = {
      observe: 'body',
    };
    return this.http.post<any>(
      `${environment.backUrl}/testingObjects_bc/getProducts`
      , data
      , { ...httpOptions, observe: 'response' }
    );
  }


}
