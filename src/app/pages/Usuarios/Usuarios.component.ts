import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { isNil, isNotNil } from 'src/app/shared/utils/utils';
import { BaseComponent } from 'src/app/shared/base.component';
import * as R from 'ramda';

import { UsuariosService } from './Usuarios.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './Usuarios.component.html',
  styleUrls: ['./Usuarios.component.css']
})
export class UsuariosComponent extends BaseComponent implements OnInit {

  readonly PAGE_NAME = 'Usuarios';
  public isNil = isNil;
  public isNotNil = isNotNil;

  public message?: string;

  public code?: number;

  public apellidos?: string;

  public edad?: number;

  public username?: string;

  public nombre?: string;

  public id?: number;

  public Warning?: {
    message?: string,
    code?: number,
  } = {};

  public Error?: {
    message?: string,
    code?: number,
  } = {};

  public Info?: {
    message?: string,
    code?: number,
  } = {};

  public usuarios?: Array<any>
    = [];

  constructor(
    public myapp: AppComponent,
    public router: Router,
    private dataService: DataService,
    private UsuariosService: UsuariosService
  ) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    const sourcePageAction: string = this.dataService.getSource();
    const args: any[] = this.dataService.getArgs();
    if (sourcePageAction) {
      try {
        if (args) {
          const body: object = this.dataService.getBody();
          Object.values(body).forEach(({ destination, value }) => {
            const fieldName = R.head(destination);
            const nestedFieldNames = R.tail(destination);
            this[fieldName] = R.assocPath(nestedFieldNames)(value)(this[fieldName]);
          });
        }
        this[sourcePageAction].apply(this, args || []);
      } catch (err) { }
    }
    this.getUsuarios();
  }


  addUsuario(
    username: string,
    apellidos: string,
    nombre: string,
    edad: number
  ) {

    this.UsuariosService.addUsuario(username,
      nombre,
      apellidos,
      edad).subscribe(
        ok => {
          this.ngOnInit();

          this.getUsuarios();
        },
        error => {
          this.showError(error.error.message, error.code);
        }
      );
  }

  getUsuarios() {

    this.UsuariosService.getUsuarios().subscribe(
      ok => {
        this.usuarios = ok.body.usuarios;
      },
      error => { }
    );
  }

  volver() {


    this.router.navigate(['ConditionalLoop']);
  }

  deleteUsuario(
    id: number
  ) {

    this.UsuariosService.deleteUsuario(id).subscribe(
      ok => {
        this.ngOnInit();

        this.getUsuarios();
      },
      error => { }
    );
  }








  showWarning(message: string, code: number) {
    this.Warning.message = message;
    this.Warning.code = code;
  }

  showError(message: string, code: number) {
    this.Error.message = message;
    this.Error.code = code;
  }

  showInfo(message: string, code: number) {
    this.Info.message = message;
    this.Info.code = code;
  }

}
