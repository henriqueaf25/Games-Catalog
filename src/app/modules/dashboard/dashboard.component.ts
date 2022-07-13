import { FeedbackService } from './../shared/services/feedback.service';
import { IGames } from './../interfaces/games.interface';
import { LoaderFeedbackService } from './../shared/services/loader.service';
import { IGame } from 'src/app/modules/interfaces/game.interface';
import { Component, OnInit } from '@angular/core';
import { GamesService } from '../shared/services/games.service';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  gamesList: IGame[];
  constructor(
    private gameService: GamesService,
    private loaderService: LoaderFeedbackService,
    public feedbackService: FeedbackService
  ) {}

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames(): void {
    this.loaderService.addLoad('loadDashboardGames');
    this.gameService
      .listGames()
      .then((res: IGames) => {
        this.gamesList = res.games;
      })
      .catch((err) => {
        this.feedbackService.showErrorFeedback(err);
      })
      .finally(() => {
        this.loaderService.removeLoad('loadDashboardGames');
      });
  }
}
