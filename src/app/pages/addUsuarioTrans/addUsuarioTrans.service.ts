import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class addUsuarioTransService {


  constructor(private http: HttpClient) { }

  addUsuarioTrans(username: any): Observable<any> {
    const data: string = JSON.stringify({
      username: username
    }, (k, v) => v === undefined ? null : v
    );
    const httpOptions = {
      observe: 'body',
    };
    return this.http.post<any>(
      `${environment.backUrl}/add-usuario-trans`
      , data
      , { ...httpOptions, observe: 'response' }
    );
  }

  getUsuariosTrans(): Observable<any> {
    const data: string = JSON.stringify({
    }, (k, v) => v === undefined ? null : v
    );
    const httpOptions = {
      observe: 'body',
    };
    return this.http.post<any>(
      `${environment.backUrl}/get-usuarios-trans`
      , data
      , { ...httpOptions, observe: 'response' }
    );
  }

  deleteUsuarioTrans(id: any): Observable<any> {
    const data: string = JSON.stringify({
      id: id
    }, (k, v) => v === undefined ? null : v
    );
    const httpOptions = {
      observe: 'body',
    };
    return this.http.post<any>(
      `${environment.backUrl}/delete-usuario-trans`
      , data
      , { ...httpOptions, observe: 'response' }
    );
  }


}
