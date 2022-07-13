import { IPhoto } from './../interfaces/media.interface';
import { ICarousel } from './../interfaces/carousel.interface';
import { CarouselService } from './../shared/services/carousel.service';
import { FeedbackService } from './../shared/services/feedback.service';
import { LoaderFeedbackService } from './../shared/services/loader.service';
import { BreadCrumbsService } from './../shared/services/breadcrumbs.service';
import { IGame } from 'src/app/modules/interfaces/game.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from '../shared/services/games.service';

@Component({
  selector: 'game-details',
  templateUrl: 'game-details.component.html',
  styleUrls: ['game-details.component.css'],
})
export class GameDetailsComponent implements OnInit {
  gameId: string;
  selectedGame: IGame;
  selectedGamePhotos: IPhoto[];
  mainPhoto: string;
  loaded: boolean = false;
  gameLoaded: boolean = false;
  carouselImages: ICarousel[] = [];

  constructor(
    private route: ActivatedRoute,
    private gameService: GamesService,
    public breadcrumbsService: BreadCrumbsService,
    public router: Router,
    private loaderService: LoaderFeedbackService,
    public feedbackService: FeedbackService,
    public carouselService: CarouselService
  ) {}

  ngOnInit(): void {
    this.gameId = this.route.snapshot.paramMap.get('id') || '{}';
    this.loadGame(this.gameId);
  }

  loadGame(id: string) {
    if (id) {
      this.loaderService.addLoad('loadGame');
      this.gameService
        .getGame(id)
        .then((res) => {
          this.selectedGame = res.game;
          this.mainPhoto = this.selectedGame.photos[0].url;
          this.gameLoaded = true;
          this.breadcrumbsService.clearCrumbs();
          this.breadcrumbsService.updateIndexes({
            description: res.game.title,
            route: this.router.url,
          });
          this.setCarouselImages();
        })
        .catch((err) => {
          this.feedbackService.showErrorFeedback(err);
        })
        .finally(() => {
          this.loaderService.removeLoad('loadGame');
        });
    }
  }

  setCarouselImages(): void {
    const length = this.selectedGame.photos.length;
    if (length > 1) {
      this.selectedGamePhotos = this.selectedGame.photos;
      this.carouselImages = this.carouselService.setCarouselImageFromPhotos(
        this.selectedGamePhotos
      );
      this.loaded = true;
      console.log(this.carouselImages);
    }
  }

  changeMainPhoto(): void {}
}
