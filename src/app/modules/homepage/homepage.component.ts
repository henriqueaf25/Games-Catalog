import { CarouselService } from './../shared/services/carousel.service';
import { ICarousel } from './../interfaces/carousel.interface';
import { LoaderFeedbackService } from './../shared/services/loader.service';
import { FeedbackService } from '../shared/services/feedback.service';
import { IGame } from '../interfaces/game.interface';
import { GamesService } from '../shared/services/games.service';
import { Component, OnInit } from '@angular/core';
import { IGames } from '../interfaces/games.interface';

@Component({
  selector: 'homepage-component',
  templateUrl: 'homepage.component.html',
  styleUrls: ['homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  highlightedGames: IGame[];
  listedGames: IGame[];
  carouselImages: ICarousel[] = [];
  loaded: boolean = false;

  constructor(
    private gamesService: GamesService,
    public feedbackService: FeedbackService,
    private loaderservice: LoaderFeedbackService,
    public carouselService: CarouselService
  ) {}

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames(): void {
    this.loaderservice.addLoad('loadGames');
    this.gamesService
      .listGames()
      .then((res: IGames) => {
        this.listedGames = res.games;
        console.log(this.listedGames);
        this.highlightedGames = this.listedGames.filter(
          (game) => game.highlight
        );
        this.carouselImages = this.carouselService.setCarouselImages(
          this.highlightedGames
        );
        this.loaded = true;
      })
      .catch((err) => {
        this.feedbackService.showErrorFeedback(err);
      })
      .finally(() => {
        this.loaderservice.removeLoad('loadGames');
      });
  }

  setCarouselImages(): void {
    this.highlightedGames.forEach((game, index, array) => {
      if (game.photos.length) {
        this.carouselImages.push(
          this.getImageDimension(game._id, array[index].photos[0].url)
        );
      }
    });
  }

  getImageDimension(id: string, url: string): ICarousel {
    let img = new Image();
    img.src = url;
    return {
      _id: id,
      path: img.src,
      width: img.width,
      height: img.height,
    };
  }

  redirectToDetails(): void {}
}
