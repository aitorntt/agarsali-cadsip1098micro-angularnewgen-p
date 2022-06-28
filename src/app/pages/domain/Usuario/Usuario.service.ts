import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from './Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public UsuarioBackUrl: string = environment.backUrl + '/' + 'Usuario';


  constructor(private http: HttpClient) {
  }

  // Fetch all objects Usuario
  getObjectsUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(
      this.UsuarioBackUrl + 's'
    );
  }

  getObjectsUsuarioPag(
    page: number,
    size: number
  ): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(
      this.UsuarioBackUrl + 's/' + page + '/' + size,
      { observe: 'response' }
    );
  }

  // Fetch objects Usuario by id without relationships
  getObjectsUsuarioWithoutRelationships(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(
      this.UsuarioBackUrl + '/UsuariosWithOutRelationships'
    );
  }

  getObjectsUsuarioWithoutRelationshipsPag(
    page: number,
    size: number
  ): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(
      `${this.UsuarioBackUrl}sWithoutRelationships/${page + 1}/${size}`,
      { observe: 'response' }
    );
  }

  // Create object Usuario
  createObjectUsuario(
    objectUsuario: Usuario
  ): Observable<Usuario> {
    return this.http.post(
      this.UsuarioBackUrl,
      objectUsuario
    );
  }

  // Fetch object Usuario by id
  getObjectUsuarioById(
    id: number
  ): Observable<Usuario> {
    return this.http.get<Usuario>(
      this.UsuarioBackUrl + '/' + id
    );
  }

  // Fetch object Usuario by id without relationships
  getObjectUsuarioWithoutRelationships(
    id: number
  ): Observable<Usuario> {
    return this.http.get<Usuario>(
      this.UsuarioBackUrl + 'WithoutRelationships' + '/' + id
    );
  }

  // Update object Usuario
  updateObjectUsuario(
    objectUsuario: Usuario
  ): Observable<Usuario> {
    return this.http.put<Usuario>(
      this.UsuarioBackUrl + '/' + objectUsuario.id,
      objectUsuario
    );
  }

  // Delete object Usuario
  deleteObjectUsuario(
    id: number
  ): Observable<Usuario> {
    return this.http.delete(
      this.UsuarioBackUrl + '/' + id
    );
  }

}
