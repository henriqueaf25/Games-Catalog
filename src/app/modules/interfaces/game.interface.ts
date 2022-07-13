import { IPhoto, IVideo } from './media.interface';

export interface IGame {
  _id: string;
  title: string;
  description: string;
  photos: IPhoto[];
  videos: IVideo[];
  mediumPrice: number;
  rating: number;
  studio: string;
  company: string;
  releaseYear: number;
  genres: string[];
  platforms: string[];
  tags: string[];
  highlight?: boolean;
  totalVotes?: number;
  productor?: string;
}
