import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { isNil, isNotNil } from 'src/app/shared/utils/utils';
import { BaseComponent } from 'src/app/shared/base.component';
import * as R from 'ramda';

import { showProductsService } from './showProducts.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-showproducts',
  templateUrl: './showProducts.component.html',
  styleUrls: ['./showProducts.component.css']
})
export class showProductsComponent extends BaseComponent implements OnInit {

  readonly PAGE_NAME = 'showProducts';
  public isNil = isNil;
  public isNotNil = isNotNil;

  public prices?: Array<any>
    = JSON.parse('[{"price":"0", "currency":"dolar"},{"price":"0", "currency":"dolar"},{"price":"0", "currency":"dolar"}]');

  public product?: {
    name?: string,
    description?: string,
    stock?: number,
    typeId?: number,
  } = {};

  public id?: number;

  public products?: Array<any>
    = [];

  public typeId?: number;

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

  constructor(
    public myapp: AppComponent,
    public router: Router,
    private dataService: DataService,
    private showProductsService: showProductsService
  ) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.product.typeId = JSON.parse(sessionStorage.getItem('TypeSession'));
    sessionStorage.setItem('TypeSession', JSON.stringify(this.product.typeId !== undefined ? this.product.typeId : null));
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
    this.showProducts(this.product);
  }


  saveProduct(
    product: any,
    prices: any[]
  ) {

    this.showProductsService.inputObjects(product,
      prices).subscribe(
        ok => {
          this.product.typeId = ok.body.typeId;
          this.ngOnInit();

          this.getProducts(ok.body.typeId);
        },
        error => { }
      );
  }

  showProducts(
    product: any
  ) {

    this.showProductsService.showProducts(product.typeId).subscribe(
      ok => {
        this.product.typeId = ok.body.type.id;
        this.typeName = ok.body.type.name;
        this.products = ok.body.products;
      },
      error => { }
    );
  }

  deleteProduct(
    id: number,
    typeId: number
  ) {

    this.showProductsService.deleteProduct(id).subscribe(
      ok => {
        this.ngOnInit();

        this.getProducts(typeId);
      },
      error => { }
    );
  }

  volver() {


    this.router.navigate(['Objects']);
  }

  getProducts(
    typeId: number
  ) {

    this.showProductsService.showProducts(typeId).subscribe(
      ok => {
        this.product.typeId = ok.body.type.id;
        this.typeName = ok.body.type.name;
        this.products = ok.body.products;
      },
      error => { }
    );
  }


  Objects_showProducts_NavigationFlow() {
    const body: any = this.dataService.getBody();

    this.product.typeId = body.typeId;
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
