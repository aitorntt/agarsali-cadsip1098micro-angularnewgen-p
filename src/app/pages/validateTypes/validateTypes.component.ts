import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { isNil, isNotNil } from 'src/app/shared/utils/utils';
import { BaseComponent } from 'src/app/shared/base.component';
import * as R from 'ramda';

import { validateTypesService } from './validateTypes.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-validatetypes',
  templateUrl: './validateTypes.component.html',
  styleUrls: ['./validateTypes.component.css']
})
export class validateTypesComponent extends BaseComponent implements OnInit {

  readonly PAGE_NAME = 'validateTypes';
  public isNil = isNil;
  public isNotNil = isNotNil;

  public typeDecimal = 3.5;

  public typeLongText = 'Texto largo';

  public typeString = 'idemarco';

  public typeInteger = 6;

  public typeObject?: {
    nombre?: string,
    edad?: number,
  } = {    
nombre: 'Pepe',
      edad: 32,
    };

  public typeList?: Array<any>
    = JSON.parse('[{"price":100},{"price":200}]');

  public typeLong = 345678;

  public typeBoolean = true;

  public typePassword = 'PruebaPassword';

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

  public typeName?: string;

  public typeValue?: string;

  constructor(
    public myapp: AppComponent,
    public router: Router,
    private dataService: DataService,
    private validateTypesService: validateTypesService
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


  addingTypes(
    typeBoolean: boolean,
    typeDecimal: number,
    typeLong: number,
    typeList: any[],
    typeLongText: string,
    typeInteger: number,
    typeObject: any,
    typeString: string,
    typePassword: string
  ) {

    this.validateTypesService.addingTypes(typeBoolean,
      typeDecimal,
      typeInteger,
      typeList,
      typeLong,
      typeLongText,
      typeObject,
      typePassword,
      typeString).subscribe(
        ok => {
          this.typeName = ok.body.typeName;
          this.typeValue = ok.body.typeValue;
          this.ngOnInit();
        },
        error => { }
      );
  }

  deleteAll() {

    this.validateTypesService.deleteAll().subscribe(
      ok => {
        this.ngOnInit();
      },
      error => { }
    );
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
