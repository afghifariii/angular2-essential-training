import { Component, Output, EventEmitter } from '@angular/core';

import { MediaItemService } from "./media-item.service";

@Component({
  selector: 'mw-media-item-list',
  templateUrl: 'app/media-item-list.component.html',
  styleUrls: ['app/media-item-list.component.css']
})
export class MediaItemListComponent {
  @Output() item = new EventEmitter();

  mediaItems;
  medium = '';

  constructor(private mediaItemService: MediaItemService) { }

  ngOnInit() {
    this.getMediaItems(this.medium);
  }

  getMediaItems(medium) {
    this.medium = medium;
    this.mediaItemService.get(medium)
      .subscribe(mediaItems => {
        this.mediaItems = mediaItems  
      });
  }

  onMediaItemDelete(mediaItem) {
    this.mediaItemService.remove(mediaItem)
    .subscribe(() => {
      this.getMediaItems(this.medium)
    });
  }

  onMediaItemShow(mediaItem) {
    this.item.emit(mediaItem);
  }

}
