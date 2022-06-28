import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class addTypeService {


  constructor(private http: HttpClient) { }

  addType(name: any): Observable<any> {
    const data: string = JSON.stringify({
      name: name
    }, (k, v) => v === undefined ? null : v
    );
    const httpOptions = {
      observe: 'body',
    };
    return this.http.post<any>(
      `${environment.backUrl}/add-type`
      , data
      , { ...httpOptions, observe: 'response' }
    );
  }

  getTypesBis(): Observable<any> {
    const data: string = JSON.stringify({
    }, (k, v) => v === undefined ? null : v
    );
    const httpOptions = {
      observe: 'body',
    };
    return this.http.post<any>(
      `${environment.backUrl}/get-types`
      , data
      , { ...httpOptions, observe: 'response' }
    );
  }

  deleteType(id: any): Observable<any> {
    const data: string = JSON.stringify({
      id: id
    }, (k, v) => v === undefined ? null : v
    );
    const httpOptions = {
      observe: 'body',
    };
    return this.http.post<any>(
      `${environment.backUrl}/delete-type`
      , data
      , { ...httpOptions, observe: 'response' }
    );
  }


}
