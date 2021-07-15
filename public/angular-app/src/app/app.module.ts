import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //New Line added
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GamesListComponent } from './games-list/games-list.component';
import { GamesDataService } from './services/game/games-data.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { OrderPipe } from './order.pipe';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { StarsPipe } from './stars.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    GamesListComponent,
    ErrorPageComponent,
    GamePageComponent,
    OrderPipe,
    RegisterPageComponent,
    ProfilePageComponent,
    StarsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "",
        component: WelcomeComponent
      },

      {
        path: "games",
        component: GamesListComponent
      },
      {
        path: "game/:gameId",
        component: GamePageComponent
      },
      {
        path: "register",
        component: RegisterPageComponent
      },
      {
        path: "profile",
        component: ProfilePageComponent
      },
      {
        path: "**",
        component: ErrorPageComponent
      }
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [GamesDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
