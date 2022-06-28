import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'deda-image',
  templateUrl: './deda-image.component.html',
  styleUrls: ['./deda-image.component.css']
})
export class DedaImageComponent {

  @Input() src: string;
  @Input() width: string;
  @Input() text: string;
  @Input() usemap: string;
  @Input() srcset: string;
  @Input() sizes: string;
  @Input() referrerpolicy: string;
  @Input() longdesc: string;
  @Input() loading: string;
  @Input() ismap: string;
  @Input() height: string;
  @Input() crossorigin: string;
  @Input() alt: string;


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
