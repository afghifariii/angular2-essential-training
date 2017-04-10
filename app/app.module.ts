import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule, XHRBackend } from "@angular/http";

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { MediaItemFormComponent } from './media-item-form.component';
import { PopupComponent } from "./popup.component";
import { ImageComponent } from "./image.component";
import { ZoomInDirective } from "./zoomIn.directive";
import { MediaItemService } from "./media-item.service";
import { lookupListToken, lookupLists } from "./provider";
import { MockXHRBackend } from "./mock-xhr-backend";


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    ZoomInDirective,
    CategoryListPipe,
    PopupComponent,
    ImageComponent,
    MediaItemFormComponent
  ],
  providers: [
    MediaItemService,
    { provide: lookupListToken, useValue: lookupLists },
    {provide: XHRBackend, useClass: MockXHRBackend}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }