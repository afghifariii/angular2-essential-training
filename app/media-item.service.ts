import { Injectable } from "@angular/core";
import { Http, URLSearchParams } from "@angular/http";
import 'rxjs/add/operator/map';



@Injectable()
export class MediaItemService {
  constructor(private http: Http) { }


  get(medium) {
    let searchParams = new URLSearchParams();
    searchParams.append('medium', medium);
    return this.http.get('mediaitems', { search: searchParams })
      .map(response => {
        return response.json().mediaItems;
      });
  }

  add(mediaItem) {
    return this.http.post('mediaitems', mediaItem)
      .map(response => { });
  }

  remove(mediaItem) {
    return this.http.delete(`mediaitems/${mediaItem.id}`)
      .map(response => { });
  }

  mediaItems = [
    {
      id: 1,
      name: "Firebug",
      medium: "Series",
      category: "Science Fiction",
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: false,
      images: [
        { src: './media/01.png', isZoomAvail: true, isSelected: true },
        { src: './media/02.png', isZoomAvail: true, isSelected: false }
      ]
    },
    {
      id: 2,
      name: "The Small Tall",
      medium: "Movies",
      category: "Comedy",
      year: 2015,
      watchedOn: null,
      isFavorite: true,
      images: [
        { src: './media/01.png', isZoomAvail: true, isSelected: true },
        { src: './media/02.png', isZoomAvail: true, isSelected: false }
      ]
    }, {
      id: 3,
      name: "The Redemption",
      medium: "Movies",
      category: "Action",
      year: 2016,
      watchedOn: null,
      isFavorite: false,
      images: [
        { src: './media/01.png', isZoomAvail: true, isSelected: true },
        { src: './media/02.png', isZoomAvail: true, isSelected: false }
      ]
    }, {
      id: 4,
      name: "Hoopers",
      medium: "Series",
      category: "Drama",
      year: null,
      watchedOn: null,
      isFavorite: true,
      images: [
        { src: './media/01.png', isZoomAvail: true, isSelected: true },
        { src: './media/02.png', isZoomAvail: true, isSelected: false }
      ]

    }, {
      id: 5,
      name: "Happy Joe: Cheery Road",
      medium: "Movies",
      category: "Action",
      year: 2015,
      watchedOn: 1457166565384,
      isFavorite: false,
      images: [
        { src: './media/01.png', isZoomAvail: true, isSelected: true },
        { src: './media/02.png', isZoomAvail: true, isSelected: false }
      ]
    }
  ];
}