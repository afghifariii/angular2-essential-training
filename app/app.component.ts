import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  selectedItem = null;

  onMediaItemShow(mediaItem) {
    this.selectedItem = mediaItem;
  }
  onPopupItemDrop(mediaItem) {
    this.selectedItem = null;
  }
}
