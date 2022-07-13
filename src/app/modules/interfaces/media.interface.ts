import { Image } from 'angular-responsive-carousel';

export interface IPhoto extends Image {
  name: string;
  url: string;
  _id: string;
}

export interface IVideo {
  type: string;
  url: string;
  _id: string;
}
