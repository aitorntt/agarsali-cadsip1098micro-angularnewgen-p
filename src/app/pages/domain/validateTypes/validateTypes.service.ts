import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { validateTypes } from './validateTypes';

@Injectable({
  providedIn: 'root'
})
export class validateTypesService {

  public validateTypesBackUrl: string = environment.backUrl + '/' + 'validateTypes';


  constructor(private http: HttpClient) {
  }

  // Fetch all objects validateTypes
  getObjectsvalidateTypes(): Observable<validateTypes[]> {
    return this.http.get<validateTypes[]>(
      this.validateTypesBackUrl + 's'
    );
  }

  getObjectsvalidateTypesPag(
    page: number,
    size: number
  ): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(
      this.validateTypesBackUrl + 's/' + page + '/' + size,
      { observe: 'response' }
    );
  }

  // Fetch objects validateTypes by id without relationships
  getObjectsvalidateTypesWithoutRelationships(): Observable<validateTypes[]> {
    return this.http.get<validateTypes[]>(
      this.validateTypesBackUrl + '/validateTypessWithOutRelationships'
    );
  }

  getObjectsvalidateTypesWithoutRelationshipsPag(
    page: number,
    size: number
  ): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(
      `${this.validateTypesBackUrl}sWithoutRelationships/${page + 1}/${size}`,
      { observe: 'response' }
    );
  }

  // Create object validateTypes
  createObjectvalidateTypes(
    objectvalidateTypes: validateTypes
  ): Observable<validateTypes> {
    return this.http.post(
      this.validateTypesBackUrl,
      objectvalidateTypes
    );
  }

  // Fetch object validateTypes by id
  getObjectvalidateTypesById(
    id: number
  ): Observable<validateTypes> {
    return this.http.get<validateTypes>(
      this.validateTypesBackUrl + '/' + id
    );
  }

  // Fetch object validateTypes by id without relationships
  getObjectvalidateTypesWithoutRelationships(
    id: number
  ): Observable<validateTypes> {
    return this.http.get<validateTypes>(
      this.validateTypesBackUrl + 'WithoutRelationships' + '/' + id
    );
  }

  // Update object validateTypes
  updateObjectvalidateTypes(
    objectvalidateTypes: validateTypes
  ): Observable<validateTypes> {
    return this.http.put<validateTypes>(
      this.validateTypesBackUrl + '/' + objectvalidateTypes.id,
      objectvalidateTypes
    );
  }

  // Delete object validateTypes
  deleteObjectvalidateTypes(
    id: number
  ): Observable<validateTypes> {
    return this.http.delete(
      this.validateTypesBackUrl + '/' + id
    );
  }

}
