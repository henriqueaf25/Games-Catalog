import { HomePageService } from './service/homepage.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SystemTopBarComponent } from '../components/system-top-bar/system-top-bar.component';
import { HomepageComponent } from './homepage.component';
import { MatIconModule } from '@angular/material/icon';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomepageComponent, SystemTopBarComponent],
  imports: [MatIconModule, RouterModule, IvyCarouselModule, HttpClientModule],
  providers: [HomePageService],
})
export class HomePageModule {}
