import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsuarioTrans } from './UsuarioTrans';

@Injectable({
  providedIn: 'root'
})
export class UsuarioTransService {

  public UsuarioTransBackUrl: string = environment.backUrl + '/' + 'UsuarioTrans';


  constructor(private http: HttpClient) {
  }

  // Fetch all objects UsuarioTrans
  getObjectsUsuarioTrans(): Observable<UsuarioTrans[]> {
    return this.http.get<UsuarioTrans[]>(
      this.UsuarioTransBackUrl + 's'
    );
  }

  getObjectsUsuarioTransPag(
    page: number,
    size: number
  ): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(
      this.UsuarioTransBackUrl + 's/' + page + '/' + size,
      { observe: 'response' }
    );
  }

  // Fetch objects UsuarioTrans by id without relationships
  getObjectsUsuarioTransWithoutRelationships(): Observable<UsuarioTrans[]> {
    return this.http.get<UsuarioTrans[]>(
      this.UsuarioTransBackUrl + '/UsuarioTranssWithOutRelationships'
    );
  }

  getObjectsUsuarioTransWithoutRelationshipsPag(
    page: number,
    size: number
  ): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(
      `${this.UsuarioTransBackUrl}sWithoutRelationships/${page + 1}/${size}`,
      { observe: 'response' }
    );
  }

  // Create object UsuarioTrans
  createObjectUsuarioTrans(
    objectUsuarioTrans: UsuarioTrans
  ): Observable<UsuarioTrans> {
    return this.http.post(
      this.UsuarioTransBackUrl,
      objectUsuarioTrans
    );
  }

  // Fetch object UsuarioTrans by id
  getObjectUsuarioTransById(
    id: number
  ): Observable<UsuarioTrans> {
    return this.http.get<UsuarioTrans>(
      this.UsuarioTransBackUrl + '/' + id
    );
  }

  // Fetch object UsuarioTrans by id without relationships
  getObjectUsuarioTransWithoutRelationships(
    id: number
  ): Observable<UsuarioTrans> {
    return this.http.get<UsuarioTrans>(
      this.UsuarioTransBackUrl + 'WithoutRelationships' + '/' + id
    );
  }

  // Update object UsuarioTrans
  updateObjectUsuarioTrans(
    objectUsuarioTrans: UsuarioTrans
  ): Observable<UsuarioTrans> {
    return this.http.put<UsuarioTrans>(
      this.UsuarioTransBackUrl + '/' + objectUsuarioTrans.id,
      objectUsuarioTrans
    );
  }

  // Delete object UsuarioTrans
  deleteObjectUsuarioTrans(
    id: number
  ): Observable<UsuarioTrans> {
    return this.http.delete(
      this.UsuarioTransBackUrl + '/' + id
    );
  }

}
