import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { isNil, isNotNil } from 'src/app/shared/utils/utils';
import { BaseComponent } from 'src/app/shared/base.component';
import * as R from 'ramda';

import { TitulosService } from './Titulos.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-titulos',
  templateUrl: './Titulos.component.html',
  styleUrls: ['./Titulos.component.css']
})
export class TitulosComponent extends BaseComponent implements OnInit {

  readonly PAGE_NAME = 'Titulos';
  public isNil = isNil;
  public isNotNil = isNotNil;

  public message?: string;

  public code?: number;

  public id?: number;

  public valoracion = 0;

  public baby = 1;

  public generoId = 0;

  public adult = 1;

  public titulo?: string;

  public pelicula = 1;

  public medium = 1;

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

  public titulos?: Array<any>
    = [];

  public generos?: Array<any>
    = [];

  constructor(
    public myapp: AppComponent,
    public router: Router,
    private dataService: DataService,
    private TitulosService: TitulosService
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
    this.getTitulos();
    this.getGeneros();
  }


  addTitulo(
    baby: number,
    generoId: number,
    medium: number,
    adult: number,
    pelicula: number,
    titulo: string,
    valoracion: number
  ) {

    this.TitulosService.addTitulo(titulo,
      valoracion,
      baby,
      medium,
      adult,
      pelicula,
      generoId).subscribe(
        ok => {
          this.ngOnInit();

          this.getTitulos();
        },
        error => {
          this.showError(error.error.message, error.code);
        }
      );
  }

  getTitulos() {

    this.TitulosService.getTitulos().subscribe(
      ok => {
        this.titulos = ok.body.outputSQLResult;
      },
      error => { }
    );
  }

  getGeneros() {

    this.TitulosService.getGeneros().subscribe(
      ok => {
        this.generos = ok.body.outputSQLResult;
      },
      error => { }
    );
  }

  volver() {


    this.router.navigate(['ConditionalLoop']);
  }

  deleteTitulo(
    id: number
  ) {

    this.TitulosService.deleteTitulo(id).subscribe(
      ok => {
        this.ngOnInit();

        this.getTitulos();
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
