import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { validateObjects } from './validateObjects';

@Injectable({
  providedIn: 'root'
})
export class validateObjectsService {

  public validateObjectsBackUrl: string = environment.backUrl + '/' + 'validateObjects';


  constructor(private http: HttpClient) {
  }

  // Fetch all objects validateObjects
  getObjectsvalidateObjects(): Observable<validateObjects[]> {
    return this.http.get<validateObjects[]>(
      this.validateObjectsBackUrl + 's'
    );
  }

  getObjectsvalidateObjectsPag(
    page: number,
    size: number
  ): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(
      this.validateObjectsBackUrl + 's/' + page + '/' + size,
      { observe: 'response' }
    );
  }

  // Fetch objects validateObjects by id without relationships
  getObjectsvalidateObjectsWithoutRelationships(): Observable<validateObjects[]> {
    return this.http.get<validateObjects[]>(
      this.validateObjectsBackUrl + '/validateObjectssWithOutRelationships'
    );
  }

  getObjectsvalidateObjectsWithoutRelationshipsPag(
    page: number,
    size: number
  ): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(
      `${this.validateObjectsBackUrl}sWithoutRelationships/${page + 1}/${size}`,
      { observe: 'response' }
    );
  }

  // Create object validateObjects
  createObjectvalidateObjects(
    objectvalidateObjects: validateObjects
  ): Observable<validateObjects> {
    return this.http.post(
      this.validateObjectsBackUrl,
      objectvalidateObjects
    );
  }

  // Fetch object validateObjects by id
  getObjectvalidateObjectsById(
    id: number
  ): Observable<validateObjects> {
    return this.http.get<validateObjects>(
      this.validateObjectsBackUrl + '/' + id
    );
  }

  // Fetch object validateObjects by id without relationships
  getObjectvalidateObjectsWithoutRelationships(
    id: number
  ): Observable<validateObjects> {
    return this.http.get<validateObjects>(
      this.validateObjectsBackUrl + 'WithoutRelationships' + '/' + id
    );
  }

  // Update object validateObjects
  updateObjectvalidateObjects(
    objectvalidateObjects: validateObjects
  ): Observable<validateObjects> {
    return this.http.put<validateObjects>(
      this.validateObjectsBackUrl + '/' + objectvalidateObjects.id,
      objectvalidateObjects
    );
  }

  // Delete object validateObjects
  deleteObjectvalidateObjects(
    id: number
  ): Observable<validateObjects> {
    return this.http.delete(
      this.validateObjectsBackUrl + '/' + id
    );
  }

}
