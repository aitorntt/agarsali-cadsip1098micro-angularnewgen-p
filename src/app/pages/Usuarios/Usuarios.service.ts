import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  constructor(private http: HttpClient) { }

  addUsuario(username: any, nombre: any, apellidos: any, edad: any): Observable<any> {
    const data: string = JSON.stringify({
      edad: edad,
      apellidos: apellidos,
      username: username,
      nombre: nombre
    }, (k, v) => v === undefined ? null : v
    );
    const httpOptions = {
      observe: 'body',
    };
    return this.http.post<any>(
      `${environment.backUrl}/add-usuario`
      , data
      , { ...httpOptions, observe: 'response' }
    );
  }

  getUsuarios(): Observable<any> {
    const data: string = JSON.stringify({
    }, (k, v) => v === undefined ? null : v
    );
    const httpOptions = {
      observe: 'body',
    };
    return this.http.post<any>(
      `${environment.backUrl}/get-usuarios`
      , data
      , { ...httpOptions, observe: 'response' }
    );
  }

  deleteUsuario(id: any): Observable<any> {
    const data: string = JSON.stringify({
      id: id
    }, (k, v) => v === undefined ? null : v
    );
    const httpOptions = {
      observe: 'body',
    };
    return this.http.post<any>(
      `${environment.backUrl}/delete-usuario`
      , data
      , { ...httpOptions, observe: 'response' }
    );
  }


}
