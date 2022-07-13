import { LoaderFeedbackModule } from '../loader-feedback/loader-feedback.module';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage.component';
import { MatIconModule } from '@angular/material/icon';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    IvyCarouselModule,
    HttpClientModule,
    MatSnackBarModule,
    SharedModule,
    LoaderFeedbackModule,
  ],
})
export class HomePageModule {}
