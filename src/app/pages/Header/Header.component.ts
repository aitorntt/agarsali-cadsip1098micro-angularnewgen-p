import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { isNil, isNotNil } from 'src/app/shared/utils/utils';
import { BaseComponent } from 'src/app/shared/base.component';
import * as R from 'ramda';

import { HeaderService } from './Header.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit, DoCheck {

  readonly PAGE_NAME = 'Header';
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

  constructor(
    public myapp: AppComponent,
    public router: Router,
    private dataService: DataService,
    private HeaderService: HeaderService
  ) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngDoCheck() {
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
