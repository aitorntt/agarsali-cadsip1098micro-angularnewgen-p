import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public UserBackUrl: string = environment.backUrl + '/' + 'User';


  constructor(private http: HttpClient) {
  }

  // Fetch all objects User
  getObjectsUser(): Observable<User[]> {
    return this.http.get<User[]>(
      this.UserBackUrl + 's'
    );
  }

  getObjectsUserPag(
    page: number,
    size: number
  ): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(
      this.UserBackUrl + 's/' + page + '/' + size,
      { observe: 'response' }
    );
  }

  // Fetch objects User by id without relationships
  getObjectsUserWithoutRelationships(): Observable<User[]> {
    return this.http.get<User[]>(
      this.UserBackUrl + '/UsersWithOutRelationships'
    );
  }

  getObjectsUserWithoutRelationshipsPag(
    page: number,
    size: number
  ): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(
      `${this.UserBackUrl}sWithoutRelationships/${page + 1}/${size}`,
      { observe: 'response' }
    );
  }

  // Create object User
  createObjectUser(
    objectUser: User
  ): Observable<User> {
    return this.http.post(
      this.UserBackUrl,
      objectUser
    );
  }

  // Fetch object User by id
  getObjectUserById(
    id: number
  ): Observable<User> {
    return this.http.get<User>(
      this.UserBackUrl + '/' + id
    );
  }

  // Fetch object User by id without relationships
  getObjectUserWithoutRelationships(
    id: number
  ): Observable<User> {
    return this.http.get<User>(
      this.UserBackUrl + 'WithoutRelationships' + '/' + id
    );
  }

  // Update object User
  updateObjectUser(
    objectUser: User
  ): Observable<User> {
    return this.http.put<User>(
      this.UserBackUrl + '/' + objectUser.id,
      objectUser
    );
  }

  // Delete object User
  deleteObjectUser(
    id: number
  ): Observable<User> {
    return this.http.delete(
      this.UserBackUrl + '/' + id
    );
  }

}
