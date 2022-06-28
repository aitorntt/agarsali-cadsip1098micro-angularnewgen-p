import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TitulosService {


  constructor(private http: HttpClient) { }

  addTitulo(titulo: any, valoracion: any, baby: any, medium: any, adult: any, pelicula: any, generoId: any): Observable<any> {
    const data: string = JSON.stringify({
      pelicula: pelicula,
      baby: baby,
      titulo: titulo,
      medium: medium,
      valoracion: valoracion,
      adult: adult,
      generoId: generoId
    }, (k, v) => v === undefined ? null : v
    );
    const httpOptions = {
      observe: 'body',
    };
    return this.http.post<any>(
      `${environment.backUrl}/add-titulo`
      , data
      , { ...httpOptions, observe: 'response' }
    );
  }

  getTitulos(): Observable<any> {
    const data: string = JSON.stringify({
    }, (k, v) => v === undefined ? null : v
    );
    const httpOptions = {
      observe: 'body',
    };
    return this.http.post<any>(
      `${environment.backUrl}/get-titulos`
      , data
      , { ...httpOptions, observe: 'response' }
    );
  }

  getGeneros(): Observable<any> {
    const data: string = JSON.stringify({
    }, (k, v) => v === undefined ? null : v
    );
    const httpOptions = {
      observe: 'body',
    };
    return this.http.post<any>(
      `${environment.backUrl}/get-generos`
      , data
      , { ...httpOptions, observe: 'response' }
    );
  }

  deleteTitulo(id: any): Observable<any> {
    const data: string = JSON.stringify({
      id: id
    }, (k, v) => v === undefined ? null : v
    );
    const httpOptions = {
      observe: 'body',
    };
    return this.http.post<any>(
      `${environment.backUrl}/delete-titulo`
      , data
      , { ...httpOptions, observe: 'response' }
    );
  }


}
