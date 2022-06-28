import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SimpleListService {


  constructor(private http: HttpClient) { }

  RunSimpleList(names: any, modValue: any): Observable<any> {
    const data: string = JSON.stringify({
      names: names,
      modValue: modValue
    }, (k, v) => v === undefined ? null : v
    );
    const httpOptions = {
      observe: 'body',
    };
    return this.http.post<any>(
      `${environment.backUrl}/testingSimpleList_bc/testSimpleList`
      , data
      , { ...httpOptions, observe: 'response' }
    );
  }

  deleteNames(): Observable<any> {
    const data: string = JSON.stringify({
    }, (k, v) => v === undefined ? null : v
    );
    const httpOptions = {
      observe: 'body',
    };
    return this.http.post<any>(
      `${environment.backUrl}/delete-names`
      , data
      , { ...httpOptions, observe: 'response' }
    );
  }


}
