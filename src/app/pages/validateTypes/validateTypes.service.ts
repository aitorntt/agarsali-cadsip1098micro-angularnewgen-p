import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class validateTypesService {


  constructor(private http: HttpClient) { }

  addingTypes(typeBoolean: any, typeDecimal: any, typeInteger: any, typeList: any, typeLong: any, typeLongText: any, typeObject: any, typePassword: any, typeString: any): Observable<any> {
    const data: string = JSON.stringify({
      typeString: typeString,
      typeInteger: typeInteger,
      typeList: typeList,
      typeObject: typeObject,
      typeLongText: typeLongText,
      typeLong: typeLong,
      typeDecimal: typeDecimal,
      typePassword: typePassword,
      typeBoolean: typeBoolean
    }, (k, v) => v === undefined ? null : v
    );
    const httpOptions = {
      observe: 'body',
    };
    return this.http.post<any>(
      `${environment.backUrl}/testingTypes_bc/validateTypes`
      , data
      , { ...httpOptions, observe: 'response' }
    );
  }

  deleteAll(): Observable<any> {
    const data: string = JSON.stringify({
    }, (k, v) => v === undefined ? null : v
    );
    const httpOptions = {
      observe: 'body',
    };
    return this.http.post<any>(
      `${environment.backUrl}/testingTypes_bc/deleteAll`
      , data
      , { ...httpOptions, observe: 'response' }
    );
  }


}
