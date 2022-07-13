import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SystemFooterComponent } from './components/system-footer/system-footer.component';
import { FeedbackService } from './services/feedback.service';
import { NgModule } from '@angular/core';
import { SystemTopBarComponent } from './components/system-top-bar/system-top-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { GamesService } from './services/games.service';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { CarouselService } from './services/carousel.service';

@NgModule({
  declarations: [
    SystemFooterComponent,
    SystemTopBarComponent,
    BreadcrumbsComponent,
  ],
  imports: [MatIconModule, RouterModule, CommonModule],
  providers: [FeedbackService, GamesService, CarouselService],
  exports: [SystemFooterComponent, SystemTopBarComponent, BreadcrumbsComponent],
})
export class SharedModule {}
