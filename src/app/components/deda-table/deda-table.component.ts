import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import * as R from 'ramda';

@Component({
  selector: 'deda-table',
  templateUrl: './deda-table.component.html',
  styleUrls: ['./deda-table.component.css']
})
export class DedaTableComponent implements OnInit {

  public path = R.path;

  @Input() iterationField;
  @Input() currentPage: number;
  @Input() itemsPerPage: number;
  @Input() queryTotal: number;
  @Input() columns: string[];
  @Input() fields;
  // Check out these attributes
  @Input() text;
  @Input() dataset;



  @Input() accessKey: string;
  @Input() class: string;
  @Input() contenteditable: boolean;
  @Input() direction: string;
  @Input() draggable: boolean;
  @Input() hidden: boolean;
  @Input() id: string;
  @Input() lang: string;
  @Input() name: string;
  @Input() numColumns: string;
  @Input() order: number;
  @Input() spellcheck: boolean;
  @Input() style: string;
  @Input() tabindex: number;
  @Input() title: string;
  @Input() translate: boolean;
  @Output() onclick: EventEmitter<any> = new EventEmitter();
  @Output() ondblclick: EventEmitter<any> = new EventEmitter();
  @Output() onmouseover: EventEmitter<any> = new EventEmitter();
  @Output() onmouseup: EventEmitter<any> = new EventEmitter();
  @Output() onmouseout: EventEmitter<any> = new EventEmitter();
  @Output() onmousemove: EventEmitter<any> = new EventEmitter();
  @Output() onwheel: EventEmitter<any> = new EventEmitter();
  @Output() onkeypress: EventEmitter<any> = new EventEmitter();
  @Output() onkeydown: EventEmitter<any> = new EventEmitter();
  @Output() onkeyup: EventEmitter<any> = new EventEmitter();
  @Output() onblur: EventEmitter<any> = new EventEmitter();
  @Output() onpagechange: EventEmitter<any> = new EventEmitter();
  @Output() onrowclick: EventEmitter<any> = new EventEmitter();
  @Output() onrowdblclick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  onClickEvent(event) {
    this.onclick.emit(event);
  }

  onDblClickEvent(event) {
    this.ondblclick.emit(event);
  }

  onMouseOverEvent(event) {
    this.onmouseover.emit(event);
  }

  onMouseUpEvent(event) {
    this.onmouseup.emit(event);
  }

  onMouseOutEvent(event) {
    this.onmouseout.emit(event);
  }

  onMouseMoveEvent(event) {
    this.onmousemove.emit(event);
  }

  onWheelEvent(event) {
    this.onwheel.emit(event);
  }

  onKeyPressEvent(event) {
    this.onkeypress.emit(event);
  }

  onKeyDownEvent(event) {
    this.onkeydown.emit(event);
  }

  onKeyUpEvent(event) {
    this.onkeyup.emit(event);
  }

  onBlurEvent(event) {
    this.onblur.emit(event);
  }

  onPageChange(page) {
    this.onpagechange.emit(page);
  }

  onRowClick(row) {
    this.onrowclick.emit(row);
  }

  onRowDblClick(row) {
    this.onrowdblclick.emit(row);
  }
}
