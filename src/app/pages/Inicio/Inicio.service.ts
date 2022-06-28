import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class InicioService {


  constructor(private http: HttpClient) { }

  insertData(): Observable<any> {
    const data: string = JSON.stringify({
    }, (k, v) => v === undefined ? null : v
    );
    const httpOptions = {
      observe: 'body',
    };
    return this.http.post<any>(
      `${environment.backUrl}/loadData_bc/LoadDatabase`
      , data
      , { ...httpOptions, observe: 'response' }
    );
  }


}
