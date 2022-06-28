import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'deda-pagination',
  templateUrl: './deda-pagination.component.html',
  styleUrls: ['./deda-pagination.component.css']
})
export class DedaPaginationComponent {

  @Input() itemsPerPage: number;
  @Input() itemsNumber: number;
  @Input() queryTotal: number;
  @Input() currentPage: number;
  @Output() changePage: EventEmitter<number> = new EventEmitter();

  public lastPage: number;

  constructor() { }

  ngOnInit() {
    this.lastPage = Math.ceil(this.queryTotal / this.itemsPerPage);
  }

  get _currentPage(): number {
    return this.currentPage;
  }

  set _currentPage(page) {
    this.currentPage = page;
    this.changePage.emit(this._currentPage);
  }

  onFirstPage(): void {
    this._currentPage = 1;
  }

  onLastPage(): void {
    this._currentPage = this.lastPage;
  }

  onNextPage(): void {
    this._currentPage += 1;
  }

  onPreviousPage(): void {
    this._currentPage -= 1;
  }
}
