import { FeedbackService } from './../services/feedback.service';
import { IGames } from './../interfaces/games.interface';
import { HomePageService } from './service/homepage.service';
import { Component, OnInit } from '@angular/core';
import { Image } from 'angular-responsive-carousel';

@Component({
  selector: 'homepage-component',
  templateUrl: 'homepage.component.html',
  styleUrls: ['homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  carouselImages: Image[] = [
    { path: 'assets/images/cover-fire.jpg', width: 1920, height: 1080 },
    { path: 'assets/images/relicta-cover.jpeg', width: 1280, height: 720 },
    { path: 'assets/images/evil-dead.jpg', width: 736, height: 414 },
  ];

  listedGames: IGames[];

  constructor(
    private homepageService: HomePageService,
    public feedbackService: FeedbackService
  ) {}

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames(): void {
    // add load
    this.homepageService
      .listGames()
      .then((res: IGames[]) => {
        this.listedGames = res;
        this.feedbackService.showSuccessFeedback();
      })
      .catch((err) => {
        this.feedbackService.showErrorFeedback(err);
      })
      .finally(() => {
        //remove load
      });
  }
}
