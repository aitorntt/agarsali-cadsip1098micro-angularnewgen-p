import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { isNil, isNotNil } from 'src/app/shared/utils/utils';
import { BaseComponent } from 'src/app/shared/base.component';
import * as R from 'ramda';

import { TableService } from './Table.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-table',
  templateUrl: './Table.component.html',
  styleUrls: ['./Table.component.css']
})
export class TableComponent extends BaseComponent implements OnInit {

  readonly PAGE_NAME = 'Table';
  public isNil = isNil;
  public isNotNil = isNotNil;

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

  public infoPeliculas?: {
    user?: {
      edad?: number,
      nombre?: string,
      apellidos?: string,
    }, generos?: Array<any>
    ,
  } = {    
user: {
    },
    };

  public infoSeries?: {
    valoracionMediaSeries?: number,
    series?: Array<any>
    ,
  } = {};

  constructor(
    public myapp: AppComponent,
    public router: Router,
    private dataService: DataService,
    private TableService: TableService
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


  volver() {


    this.router.navigate(['ConditionalLoop']);
  }


  ConditionalLoop_ShowPeliculas_ServiceResponseNavigationFlow() {
    const body: any = this.dataService.getBody();

    this.infoPeliculas = body.infoPeliculas;
    this.infoSeries = body.infoSeries;
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
