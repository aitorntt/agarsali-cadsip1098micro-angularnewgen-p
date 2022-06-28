import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { isNil, isNotNil } from 'src/app/shared/utils/utils';
import { BaseComponent } from 'src/app/shared/base.component';
import * as R from 'ramda';

import { addUsuarioTransService } from './addUsuarioTrans.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-addusuariotrans',
  templateUrl: './addUsuarioTrans.component.html',
  styleUrls: ['./addUsuarioTrans.component.css']
})
export class addUsuarioTransComponent extends BaseComponent implements OnInit {

  readonly PAGE_NAME = 'addUsuarioTrans';
  public isNil = isNil;
  public isNotNil = isNotNil;

  public username?: string;

  public id?: number;

  public usuarios?: Array<any>
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

  constructor(
    public myapp: AppComponent,
    public router: Router,
    private dataService: DataService,
    private addUsuarioTransService: addUsuarioTransService
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
    this.getUsuariosTrans();
  }


  addUsuarioTrans(
    username: string
  ) {

    this.addUsuarioTransService.addUsuarioTrans(username).subscribe(
      ok => {
        this.ngOnInit();

        this.getUsuariosTrans();
      },
      error => { }
    );
  }

  getUsuariosTrans() {

    this.addUsuarioTransService.getUsuariosTrans().subscribe(
      ok => {
        this.usuarios = ok.body.outputSQLResult;
      },
      error => { }
    );
  }

  volver() {


    this.router.navigate(['Transactional']);
  }

  deleteUsuarioTrans(
    id: number
  ) {

    this.addUsuarioTransService.deleteUsuarioTrans(id).subscribe(
      ok => {
        this.ngOnInit();

        this.getUsuariosTrans();
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
