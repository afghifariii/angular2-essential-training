import { Component, Input, Output, EventEmitter } from '@angular/core';
 
@Component({
  selector: 'mw-popup',
  templateUrl: 'app/popup.component.html',
  styleUrls: ['app/popup.component.css']
})
export class PopupComponent {

  @Input() popupItem;
  @Output() dropItem = new EventEmitter();

  isVisible(){
    return this.popupItem ? false:true;
  }

  onClose(){
    this.dropItem.emit(this.popupItem);
  }

  imagesList(){
    return this.popupItem && this.popupItem.images ? this.popupItem.images : []
  }
}