import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { SharedModule } from '../shared/shared.module';
import { GameDetailsComponent } from './game-details.component';

@NgModule({
  declarations: [GameDetailsComponent],
  imports: [CommonModule, SharedModule, IvyCarouselModule],
})
export class GameDetailsModule {}
