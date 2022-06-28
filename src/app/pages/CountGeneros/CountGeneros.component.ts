import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { isNil, isNotNil } from 'src/app/shared/utils/utils';
import { BaseComponent } from 'src/app/shared/base.component';
import * as R from 'ramda';

import { CountGenerosService } from './CountGeneros.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-countgeneros',
  templateUrl: './CountGeneros.component.html',
  styleUrls: ['./CountGeneros.component.css']
})
export class CountGenerosComponent extends BaseComponent implements OnInit {

  readonly PAGE_NAME = 'CountGeneros';
  public isNil = isNil;
  public isNotNil = isNotNil;

  public countGeneros?: number;

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
    private CountGenerosService: CountGenerosService
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
    this.verCountGeneros();
  }


  volver() {


    this.router.navigate(['IncrementalConfig']);
  }

  verCountGeneros() {

    this.CountGenerosService.testCountGeneros().subscribe(
      ok => {
        this.countGeneros = ok.body.countGeneros;
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
