import { LoaderFeedbackModule } from '../app/modules/loader-feedback/loader-feedback.module';
import { ToastrModule } from 'ngx-toastr';
import { LoginModule } from './modules/login/login.module';
import { HomePageModule } from './modules/homepage/homepage.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';
import { GameDetailsModule } from './modules/game-details/game-details.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule,
    BrowserAnimationsModule,
    LoginModule,
    GameDetailsModule,
    SharedModule,
    LoaderFeedbackModule,
    DashboardModule,
    ToastrModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
