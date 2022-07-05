export interface IGames {
  title: string;
  description: string;
  photos: File[];
  videos: File[];
  mediumPrice: number;
  studio: string;
  company: string;
  releaseYear: number;
  genres: string[];
  platforms: string[];
  tags: string[];
}
