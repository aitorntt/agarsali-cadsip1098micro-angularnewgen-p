import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'deda-check-box',
  templateUrl: './deda-check-box.component.html',
  styleUrls: ['./deda-check-box.component.css']
})
export class DedaCheckBoxComponent {

  @Input() autofocus: boolean;
  @Input() required: boolean;
  @Input() form: string;
  @Input() value: string;
  @Input() disabled: boolean;
  @Input() checked: boolean;
  @Input() text;
  @Output() textChange: EventEmitter<any> = new EventEmitter();


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

  constructor() { }

  inputChange() {
    this.textChange.emit(this.text);
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
}
