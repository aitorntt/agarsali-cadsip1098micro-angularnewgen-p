import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ConditionalLoopService {


  constructor(private http: HttpClient) { }

  ShowPeliculas(username: any): Observable<any> {
    const data: string = JSON.stringify({
      username: username
    }, (k, v) => v === undefined ? null : v
    );
    const httpOptions = {
      observe: 'body',
    };
    return this.http.post<any>(
      `${environment.backUrl}/testingConditionalLoop_bc/testingConditionalLoop`
      , data
      , { ...httpOptions, observe: 'response' }
    );
  }


}
