import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showHeader = false;
  showFooter = false;
  pagesConfiguration: any = {};

  constructor(private router: Router) {
    this.pagesConfiguration = {
      'Usuarios': {
        useHeader: false,
        useFooter: false
      },
      'CompleteExample': {
        useHeader: false,
        useFooter: false
      },
      'Detail': {
        useHeader: false,
        useFooter: false
      },
      'Inicio': {
        useHeader: false,
        useFooter: false
      },
      '': {
        useHeader: false,
        useFooter: false
      },
      'ConditionalLoop': {
        useHeader: false,
        useFooter: false
      },
      'Table': {
        useHeader: false,
        useFooter: false
      },
      'Titulos': {
        useHeader: false,
        useFooter: false
      },
      'Transactional': {
        useHeader: false,
        useFooter: false
      },
      'addUsuarioTrans': {
        useHeader: false,
        useFooter: false
      },
      'TransResults': {
        useHeader: false,
        useFooter: false
      },
      'Objects': {
        useHeader: false,
        useFooter: false
      },
      'IncrementalConfig': {
        useHeader: false,
        useFooter: false
      },
      'Sumatorio': {
        useHeader: false,
        useFooter: false
      },
      'CountGeneros': {
        useHeader: false,
        useFooter: false
      },
      'showProducts': {
        useHeader: false,
        useFooter: false
      },
      'addType': {
        useHeader: false,
        useFooter: false
      },
      'validateTypes': {
        useHeader: false,
        useFooter: false
      },
      'SimpleList': {
        useHeader: false,
        useFooter: false
      },
      'Header': {
        useHeader: false,
        useFooter: false
      },
    };

    const isNavigation = e => e instanceof NavigationStart;
    this.router.events.pipe(filter(isNavigation))
      .subscribe(this.toggleHeaderFooter.bind(this));
  }

  toggleHeaderFooter(navigation) {
    const [, pageName = '', action] = navigation.url.split('/');
    const name = action ? `${pageName}/${action}` : pageName;
    const pageConfig = this.pagesConfiguration[name];

    this.showHeader = pageConfig && pageConfig.useHeader;
    this.showFooter = pageConfig && pageConfig.useFooter;
  }

  getUserData(attribute: string) {
    const session = sessionStorage.getItem('UserData') ? JSON.parse(sessionStorage.getItem('UserData')) : null;
    return (session) ? session[attribute] : '';
  }

  getUserName() {
    return this.getUserData('Name');
  }

  getPhoto() {
    return this.getUserData('fileNamePhoto');
  }

  getSessionObject(sessionVar: string) {
    if (sessionStorage.getItem(sessionVar) !== null &&
      sessionStorage.getItem(sessionVar) !== 'undefined' &&
      sessionStorage.getItem(sessionVar) !== '{}') {
      const sessionKey = JSON.parse(sessionStorage.getItem(sessionVar));
      return sessionKey;
    }
    return [];
  }

  inputCheck(miDom, name) {
    miDom[name]['checked'] = !miDom[name]['checked'];
  }

  builtArray(salida: any[], entrada: any[]) {
    return entrada.reduce(function(acc, value) {
      return value.checked === true
        ? acc.concat(value)
        : acc;
    }, salida);
  }
}
