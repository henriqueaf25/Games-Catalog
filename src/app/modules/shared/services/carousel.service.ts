import { IGame } from 'src/app/modules/interfaces/game.interface';
import { Injectable } from '@angular/core';
import { ICarousel } from '../../interfaces/carousel.interface';
import { Image } from 'angular-responsive-carousel';
import { IPhoto } from '../../interfaces/media.interface';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  constructor() {}

  setCarouselImages(data: IGame[]): ICarousel[] {
    const carouselImages: ICarousel[] = [];
    data.forEach((game, index, array) => {
      if (game.photos.length) {
        carouselImages.push(this.getImageDimension(array[index].photos[0].url));
      }
    });

    return carouselImages;
  }

  setCarouselImageFromPhotos(data: IPhoto[]): any {
    const carouselImages: Image[] = [];
    console.log(data);
    data.forEach((photo) => {
      carouselImages.push(this.getImageDimension(photo.url));
    });

    return carouselImages;
  }

  getImageDimension(url: string): Image {
    let img = new Image();
    img.src = url;
    return {
      path: img.src,
      width: img.width,
      height: img.height,
    };
  }
}
