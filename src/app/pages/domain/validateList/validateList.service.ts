import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { validateList } from './validateList';

@Injectable({
  providedIn: 'root'
})
export class validateListService {

  public validateListBackUrl: string = environment.backUrl + '/' + 'validateList';


  constructor(private http: HttpClient) {
  }

  // Fetch all objects validateList
  getObjectsvalidateList(): Observable<validateList[]> {
    return this.http.get<validateList[]>(
      this.validateListBackUrl + 's'
    );
  }

  getObjectsvalidateListPag(
    page: number,
    size: number
  ): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(
      this.validateListBackUrl + 's/' + page + '/' + size,
      { observe: 'response' }
    );
  }

  // Fetch objects validateList by id without relationships
  getObjectsvalidateListWithoutRelationships(): Observable<validateList[]> {
    return this.http.get<validateList[]>(
      this.validateListBackUrl + '/validateListsWithOutRelationships'
    );
  }

  getObjectsvalidateListWithoutRelationshipsPag(
    page: number,
    size: number
  ): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(
      `${this.validateListBackUrl}sWithoutRelationships/${page + 1}/${size}`,
      { observe: 'response' }
    );
  }

  // Create object validateList
  createObjectvalidateList(
    objectvalidateList: validateList
  ): Observable<validateList> {
    return this.http.post(
      this.validateListBackUrl,
      objectvalidateList
    );
  }

  // Fetch object validateList by id
  getObjectvalidateListById(
    id: number
  ): Observable<validateList> {
    return this.http.get<validateList>(
      this.validateListBackUrl + '/' + id
    );
  }

  // Fetch object validateList by id without relationships
  getObjectvalidateListWithoutRelationships(
    id: number
  ): Observable<validateList> {
    return this.http.get<validateList>(
      this.validateListBackUrl + 'WithoutRelationships' + '/' + id
    );
  }

  // Update object validateList
  updateObjectvalidateList(
    objectvalidateList: validateList
  ): Observable<validateList> {
    return this.http.put<validateList>(
      this.validateListBackUrl + '/' + objectvalidateList.id,
      objectvalidateList
    );
  }

  // Delete object validateList
  deleteObjectvalidateList(
    id: number
  ): Observable<validateList> {
    return this.http.delete(
      this.validateListBackUrl + '/' + id
    );
  }

}
