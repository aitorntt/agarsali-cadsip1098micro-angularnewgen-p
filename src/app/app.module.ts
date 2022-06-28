import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InterceptorService } from './interceptor.service';
// Components
import { NgSelectModule } from '@ng-select/ng-select';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
// Angular Material
import { MatPaginatorModule, MatTableModule } from '@angular/material';
// Pipes
import { DatePipe } from '@angular/common';
import { SafePipe } from './shared/pipes/safe.pipe';
// Deda Native Components
import { DedaButtonComponent } from './components/deda-button/deda-button.component';
import { DedaTextBoxComponent } from './components/deda-text-box/deda-text-box.component';
import { DedaPasswordComponent } from './components/deda-password/deda-password.component';
import { DedaTextBlockComponent } from './components/deda-text-block/deda-text-block.component';
import { DedaGridComponent } from './components/deda-grid/deda-grid.component';
import { DedaCheckBoxComponent } from './components/deda-check-box/deda-check-box.component';
import { DedaRadioButtonComponent } from './components/deda-radio-button/deda-radio-button.component';
import { DedaLinkComponent } from './components/deda-link/deda-link.component';
import { DedaImageComponent } from './components/deda-image/deda-image.component';
import { DedaVideoComponent } from './components/deda-video/deda-video.component';
import { DedaFormComponent } from './components/deda-form/deda-form.component';
import { DedaTableComponent } from './components/deda-table/deda-table.component';
import { DedaSelectComponent } from './components/deda-select/deda-select.component';
import { DedaPaginationComponent } from './components/deda-pagination/deda-pagination.component';


import { AppComponent } from './app.component';
import { UsuariosComponent } from './pages/Usuarios/Usuarios.component';
import { CompleteExampleComponent } from './pages/CompleteExample/CompleteExample.component';
import { DetailComponent } from './pages/Detail/Detail.component';
import { InicioComponent } from './pages/Inicio/Inicio.component';
import { ConditionalLoopComponent } from './pages/ConditionalLoop/ConditionalLoop.component';
import { TableComponent } from './pages/Table/Table.component';
import { TitulosComponent } from './pages/Titulos/Titulos.component';
import { TransactionalComponent } from './pages/Transactional/Transactional.component';
import { addUsuarioTransComponent } from './pages/addUsuarioTrans/addUsuarioTrans.component';
import { TransResultsComponent } from './pages/TransResults/TransResults.component';
import { ObjectsComponent } from './pages/Objects/Objects.component';
import { IncrementalConfigComponent } from './pages/IncrementalConfig/IncrementalConfig.component';
import { SumatorioComponent } from './pages/Sumatorio/Sumatorio.component';
import { CountGenerosComponent } from './pages/CountGeneros/CountGeneros.component';
import { showProductsComponent } from './pages/showProducts/showProducts.component';
import { addTypeComponent } from './pages/addType/addType.component';
import { validateTypesComponent } from './pages/validateTypes/validateTypes.component';
import { SimpleListComponent } from './pages/SimpleList/SimpleList.component';
import { HeaderComponent } from './pages/Header/Header.component';



const routes: Routes = [
  {
    path: 'Usuarios',
    component: UsuariosComponent
  },
  {
    path: 'CompleteExample',
    component: CompleteExampleComponent
  },
  {
    path: 'Detail',
    component: DetailComponent
  },
  {
    path: 'Inicio',
    component: InicioComponent
  },
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'ConditionalLoop',
    component: ConditionalLoopComponent
  },
  {
    path: 'Table',
    component: TableComponent
  },
  {
    path: 'Titulos',
    component: TitulosComponent
  },
  {
    path: 'Transactional',
    component: TransactionalComponent
  },
  {
    path: 'addUsuarioTrans',
    component: addUsuarioTransComponent
  },
  {
    path: 'TransResults',
    component: TransResultsComponent
  },
  {
    path: 'Objects',
    component: ObjectsComponent
  },
  {
    path: 'IncrementalConfig',
    component: IncrementalConfigComponent
  },
  {
    path: 'Sumatorio',
    component: SumatorioComponent
  },
  {
    path: 'CountGeneros',
    component: CountGenerosComponent
  },
  {
    path: 'showProducts',
    component: showProductsComponent
  },
  {
    path: 'addType',
    component: addTypeComponent
  },
  {
    path: 'validateTypes',
    component: validateTypesComponent
  },
  {
    path: 'SimpleList',
    component: SimpleListComponent
  },
];

@NgModule({
  declarations: [
    UsuariosComponent,
    CompleteExampleComponent,
    DetailComponent,
    InicioComponent,
    ConditionalLoopComponent,
    TableComponent,
    TitulosComponent,
    TransactionalComponent,
    addUsuarioTransComponent,
    TransResultsComponent,
    ObjectsComponent,
    IncrementalConfigComponent,
    SumatorioComponent,
    CountGenerosComponent,
    showProductsComponent,
    addTypeComponent,
    validateTypesComponent,
    SimpleListComponent,
    HeaderComponent,
    AppComponent,
    SafePipe,
    DedaButtonComponent,
    DedaTextBoxComponent,
    DedaPasswordComponent,
    DedaTextBlockComponent,
    DedaGridComponent,
    DedaCheckBoxComponent,
    DedaRadioButtonComponent,
    DedaLinkComponent,
    DedaImageComponent,
    DedaVideoComponent,
    DedaFormComponent,
    DedaTableComponent,
    DedaSelectComponent,
    DedaPaginationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgMultiSelectDropDownModule.forRoot(),
    RouterModule.forRoot(routes),
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    DatePipe,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

  constructor() {
  }


}
