import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { isNil, isNotNil } from 'src/app/shared/utils/utils';
import { BaseComponent } from 'src/app/shared/base.component';
import * as R from 'ramda';

import { DetailService } from './Detail.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-detail',
  templateUrl: './Detail.component.html',
  styleUrls: ['./Detail.component.css']
})
export class DetailComponent extends BaseComponent implements OnInit {

  readonly PAGE_NAME = 'Detail';
  public isNil = isNil;
  public isNotNil = isNotNil;

  public data?: {
    username?: string,
    surnames?: string,
    email?: string,
    name?: string,
  } = {};

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
    private DetailService: DetailService
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


    this.router.navigate(['CompleteExample']);
  }


  CompleteExample_UserDataAction_ServiceResponseNavigationFlow() {
    const body: any = this.dataService.getBody();

    this.data = body.data;
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
