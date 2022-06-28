import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { genero } from './genero';

@Injectable({
  providedIn: 'root'
})
export class generoService {

  public generoBackUrl: string = environment.backUrl + '/' + 'genero';


  constructor(private http: HttpClient) {
  }

  // Fetch all objects genero
  getObjectsgenero(): Observable<genero[]> {
    return this.http.get<genero[]>(
      this.generoBackUrl + 's'
    );
  }

  getObjectsgeneroPag(
    page: number,
    size: number
  ): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(
      this.generoBackUrl + 's/' + page + '/' + size,
      { observe: 'response' }
    );
  }

  // Fetch objects genero by id without relationships
  getObjectsgeneroWithoutRelationships(): Observable<genero[]> {
    return this.http.get<genero[]>(
      this.generoBackUrl + '/generosWithOutRelationships'
    );
  }

  getObjectsgeneroWithoutRelationshipsPag(
    page: number,
    size: number
  ): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(
      `${this.generoBackUrl}sWithoutRelationships/${page + 1}/${size}`,
      { observe: 'response' }
    );
  }

  // Create object genero
  createObjectgenero(
    objectgenero: genero
  ): Observable<genero> {
    return this.http.post(
      this.generoBackUrl,
      objectgenero
    );
  }

  // Fetch object genero by id
  getObjectgeneroById(
    id: number
  ): Observable<genero> {
    return this.http.get<genero>(
      this.generoBackUrl + '/' + id
    );
  }

  // Fetch object genero by id without relationships
  getObjectgeneroWithoutRelationships(
    id: number
  ): Observable<genero> {
    return this.http.get<genero>(
      this.generoBackUrl + 'WithoutRelationships' + '/' + id
    );
  }

  // Update object genero
  updateObjectgenero(
    objectgenero: genero
  ): Observable<genero> {
    return this.http.put<genero>(
      this.generoBackUrl + '/' + objectgenero.id,
      objectgenero
    );
  }

  // Delete object genero
  deleteObjectgenero(
    id: number
  ): Observable<genero> {
    return this.http.delete(
      this.generoBackUrl + '/' + id
    );
  }

}
