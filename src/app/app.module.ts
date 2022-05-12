import { NgModule } from '@angular/core';
import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import {LottieModule} from "ngx-lottie";
import player from 'lottie-web';

export function playerFactory() {
  return player;
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'sey3di'}),
    BrowserTransferStateModule,
    AppRoutingModule,
    LottieModule.forRoot({player: playerFactory}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
