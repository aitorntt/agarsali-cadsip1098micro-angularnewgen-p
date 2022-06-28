import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { validNames } from './validNames';

@Injectable({
  providedIn: 'root'
})
export class validNamesService {

  public validNamesBackUrl: string = environment.backUrl + '/' + 'validNames';


  constructor(private http: HttpClient) {
  }

  // Fetch all objects validNames
  getObjectsvalidNames(): Observable<validNames[]> {
    return this.http.get<validNames[]>(
      this.validNamesBackUrl + 's'
    );
  }

  getObjectsvalidNamesPag(
    page: number,
    size: number
  ): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(
      this.validNamesBackUrl + 's/' + page + '/' + size,
      { observe: 'response' }
    );
  }

  // Fetch objects validNames by id without relationships
  getObjectsvalidNamesWithoutRelationships(): Observable<validNames[]> {
    return this.http.get<validNames[]>(
      this.validNamesBackUrl + '/validNamessWithOutRelationships'
    );
  }

  getObjectsvalidNamesWithoutRelationshipsPag(
    page: number,
    size: number
  ): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(
      `${this.validNamesBackUrl}sWithoutRelationships/${page + 1}/${size}`,
      { observe: 'response' }
    );
  }

  // Create object validNames
  createObjectvalidNames(
    objectvalidNames: validNames
  ): Observable<validNames> {
    return this.http.post(
      this.validNamesBackUrl,
      objectvalidNames
    );
  }

  // Fetch object validNames by id
  getObjectvalidNamesById(
    id: number
  ): Observable<validNames> {
    return this.http.get<validNames>(
      this.validNamesBackUrl + '/' + id
    );
  }

  // Fetch object validNames by id without relationships
  getObjectvalidNamesWithoutRelationships(
    id: number
  ): Observable<validNames> {
    return this.http.get<validNames>(
      this.validNamesBackUrl + 'WithoutRelationships' + '/' + id
    );
  }

  // Update object validNames
  updateObjectvalidNames(
    objectvalidNames: validNames
  ): Observable<validNames> {
    return this.http.put<validNames>(
      this.validNamesBackUrl + '/' + objectvalidNames.id,
      objectvalidNames
    );
  }

  // Delete object validNames
  deleteObjectvalidNames(
    id: number
  ): Observable<validNames> {
    return this.http.delete(
      this.validNamesBackUrl + '/' + id
    );
  }

}
