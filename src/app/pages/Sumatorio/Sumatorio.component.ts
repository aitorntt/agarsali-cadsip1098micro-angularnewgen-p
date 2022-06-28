import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { isNil, isNotNil } from 'src/app/shared/utils/utils';
import { BaseComponent } from 'src/app/shared/base.component';
import * as R from 'ramda';

import { SumatorioService } from './Sumatorio.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-sumatorio',
  templateUrl: './Sumatorio.component.html',
  styleUrls: ['./Sumatorio.component.css']
})
export class SumatorioComponent extends BaseComponent implements OnInit {

  readonly PAGE_NAME = 'Sumatorio';
  public isNil = isNil;
  public isNotNil = isNotNil;

  public sumatorio?: number;

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
    private SumatorioService: SumatorioService
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
    this.verSumatorio();
  }


  verSumatorio() {

    this.SumatorioService.testSumatorio().subscribe(
      ok => {
        this.sumatorio = ok.body.sumatorio;
      },
      error => { }
    );
  }

  volver() {


    this.router.navigate(['IncrementalConfig']);
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
