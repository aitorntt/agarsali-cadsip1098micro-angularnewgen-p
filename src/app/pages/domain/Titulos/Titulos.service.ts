import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Titulos } from './Titulos';

@Injectable({
  providedIn: 'root'
})
export class TitulosService {

  public TitulosBackUrl: string = environment.backUrl + '/' + 'Titulos';


  constructor(private http: HttpClient) {
  }

  // Fetch all objects Titulos
  getObjectsTitulos(): Observable<Titulos[]> {
    return this.http.get<Titulos[]>(
      this.TitulosBackUrl + 's'
    );
  }

  getObjectsTitulosPag(
    page: number,
    size: number
  ): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(
      this.TitulosBackUrl + 's/' + page + '/' + size,
      { observe: 'response' }
    );
  }

  // Fetch objects Titulos by id without relationships
  getObjectsTitulosWithoutRelationships(): Observable<Titulos[]> {
    return this.http.get<Titulos[]>(
      this.TitulosBackUrl + '/TitulossWithOutRelationships'
    );
  }

  getObjectsTitulosWithoutRelationshipsPag(
    page: number,
    size: number
  ): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(
      `${this.TitulosBackUrl}sWithoutRelationships/${page + 1}/${size}`,
      { observe: 'response' }
    );
  }

  // Create object Titulos
  createObjectTitulos(
    objectTitulos: Titulos
  ): Observable<Titulos> {
    return this.http.post(
      this.TitulosBackUrl,
      objectTitulos
    );
  }

  // Fetch object Titulos by id
  getObjectTitulosById(
    id: number
  ): Observable<Titulos> {
    return this.http.get<Titulos>(
      this.TitulosBackUrl + '/' + id
    );
  }

  // Fetch object Titulos by id without relationships
  getObjectTitulosWithoutRelationships(
    id: number
  ): Observable<Titulos> {
    return this.http.get<Titulos>(
      this.TitulosBackUrl + 'WithoutRelationships' + '/' + id
    );
  }

  // Update object Titulos
  updateObjectTitulos(
    objectTitulos: Titulos
  ): Observable<Titulos> {
    return this.http.put<Titulos>(
      this.TitulosBackUrl + '/' + objectTitulos.id,
      objectTitulos
    );
  }

  // Delete object Titulos
  deleteObjectTitulos(
    id: number
  ): Observable<Titulos> {
    return this.http.delete(
      this.TitulosBackUrl + '/' + id
    );
  }

}
