import{ Component, Input, Output, EventEmitter } from '@angular/core';
import * as _ from "underscore";

@Component({
  selector: 'mw-image',
  templateUrl: 'app/image.component.html',
  styleUrls: ['app/image.component.css']
})
export class ImageComponent{
  @Input() images;
  @Output() next = new EventEmitter();
  @Output() prev = new EventEmitter();

  nextImage() {
    var currentItem = _.find(this.images, function(obj: any){
        return obj.isSelected === true;
    });
    var currentIndex = this.images.indexOf(currentItem);
    var next = currentIndex + 1 >= this.images.length ? 0 : currentIndex + 1;

    this.images[currentIndex].isSelected = false;
    this.images[next].isSelected = true;
  }
  
  prevImage() {
    var currentItem = _.find(this.images, function(obj: any){
        return obj && obj.isSelected === true;
    });
    var currentIndex = this.images.indexOf(currentItem);
    var prev = currentIndex - 1 < 0 ? this.images.length - 1 : currentIndex - 1;

    this.images[currentIndex].isSelected = false;
    this.images[prev].isSelected = true;
  }

}