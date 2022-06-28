import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { isNil, isNotNil } from 'src/app/shared/utils/utils';
import { BaseComponent } from 'src/app/shared/base.component';
import * as R from 'ramda';

import { ConditionalLoopService } from './ConditionalLoop.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-conditionalloop',
  templateUrl: './ConditionalLoop.component.html',
  styleUrls: ['./ConditionalLoop.component.css']
})
export class ConditionalLoopComponent extends BaseComponent implements OnInit {

  readonly PAGE_NAME = 'ConditionalLoop';
  public isNil = isNil;
  public isNotNil = isNotNil;

  public message?: string;

  public code?: number;

  public username?: string;

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

  constructor(
    public myapp: AppComponent,
    public router: Router,
    private dataService: DataService,
    private ConditionalLoopService: ConditionalLoopService
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
  }


  showResults(
    username: string
  ) {

    this.ConditionalLoopService.ShowPeliculas(username).subscribe(
      ok => {
        const ServiceResponseNavigationFlow: any = {
          infoPeliculas: ok.body.infoPeliculas,
          infoSeries: ok.body.infoSeries
        };

        this.dataService.setData(
          this.PAGE_NAME + '_ShowPeliculas_ServiceResponseNavigationFlow',
          ServiceResponseNavigationFlow,
          null
        );
        this.router.navigate(['Table']);
      },
      error => {
        this.showError(error.error.message, error.code);
      }
    );
  }

  volver() {


    this.router.navigate(['Inicio']);
  }

  addUsuario() {


    this.router.navigate(['Usuarios']);
  }

  addTitulo() {


    this.router.navigate(['Titulos']);
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
