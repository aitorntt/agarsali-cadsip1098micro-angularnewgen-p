import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { isNil, isNotNil } from 'src/app/shared/utils/utils';
import { BaseComponent } from 'src/app/shared/base.component';
import * as R from 'ramda';

import { ObjectsService } from './Objects.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-objects',
  templateUrl: './Objects.component.html',
  styleUrls: ['./Objects.component.css']
})
export class ObjectsComponent extends BaseComponent implements OnInit {

  readonly PAGE_NAME = 'Objects';
  public isNil = isNil;
  public isNotNil = isNotNil;

  public types?: Array<any>
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

  public typeId?: number;

  constructor(
    public myapp: AppComponent,
    public router: Router,
    private dataService: DataService,
    private ObjectsService: ObjectsService
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
    this.getTypes();
  }


  getTypes() {

    this.ObjectsService.getTypes().subscribe(
      ok => {
        this.types = ok.body.types;
      },
      error => { }
    );
  }

  showProducts(
    typeId: number
  ) {


    const NavigationFlow: any = {
      typeId: typeId
    };

    this.dataService.setData(
      this.PAGE_NAME + '_showProducts_NavigationFlow',
      NavigationFlow,
      null
    );
    this.router.navigate(['showProducts']);
  }

  addType() {


    this.router.navigate(['addType']);
  }

  volver() {


    this.router.navigate(['Inicio']);
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
