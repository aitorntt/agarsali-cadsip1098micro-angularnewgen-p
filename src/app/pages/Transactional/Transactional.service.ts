import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TransactionalService {


  constructor(private http: HttpClient) { }

  testTransactional(username: any): Observable<any> {
    const data: string = JSON.stringify({
      username: username
    }, (k, v) => v === undefined ? null : v
    );
    const httpOptions = {
      observe: 'body',
    };
    return this.http.post<any>(
      `${environment.backUrl}/testingTransactional_bc/testingTransactional`
      , data
      , { ...httpOptions, observe: 'response' }
    );
  }


}
