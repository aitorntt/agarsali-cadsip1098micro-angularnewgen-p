import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { isNil, isNotNil } from 'src/app/shared/utils/utils';
import { BaseComponent } from 'src/app/shared/base.component';
import * as R from 'ramda';

import { SimpleListService } from './SimpleList.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-simplelist',
  templateUrl: './SimpleList.component.html',
  styleUrls: ['./SimpleList.component.css']
})
export class SimpleListComponent extends BaseComponent implements OnInit {

  readonly PAGE_NAME = 'SimpleList';
  public isNil = isNil;
  public isNotNil = isNotNil;

  public names?: Array<any>
    = [];

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

  public modValue = 5;

  public newValue?: number;

  public people?: Array<any>
    = JSON.parse('["Victor","Raquel","Nacho","Alex","Abel","Jesús"]');

  constructor(
    public myapp: AppComponent,
    public router: Router,
    private dataService: DataService,
    private SimpleListService: SimpleListService
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


  execute(
    names: any[],
    modValue: number
  ) {

    this.SimpleListService.RunSimpleList(names,
      modValue).subscribe(
        ok => {
          this.newValue = ok.body.modValue;
          this.ngOnInit();
        },
        error => { }
      );
  }

  volver() {


    this.router.navigate(['Inicio']);
  }

  deleteAll() {

    this.SimpleListService.deleteNames().subscribe(
      ok => {
        this.ngOnInit();
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
