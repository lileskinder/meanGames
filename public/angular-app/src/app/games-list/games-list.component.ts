import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { GamesDataService } from '../services/game/games-data.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})

export class GamesListComponent implements OnInit {
  title: string = "MEAN Games";
  game: Game = {} as Game;
  newTitle = "";
  newPrice = "";
  newYear = "";
  newRate = "";
  newMinPlayers = "";
  newMaxPlayers = "";
  newMinAge = "";
  newDesigners = "";
  errorMessage = "";
  success = "";
  //gameForm = FormGroup;

  games: Game[] = [];

  constructor(private gamesDataService: GamesDataService) {
    // this.gameForm = new FormGroup({
    //   title: new FormControl("", Validators.compose([Validators.required]))
    // });
  }

  ngOnInit(): void {
    this.getGames();
    console.log(this.games);
  }

  public getGames(): void {
    this.gamesDataService.getGames()
      .then(foundGames => this.games = foundGames);
  }

  public addGame(): void {
    if (this.newTitle == "" || this.newPrice == "" ||
      this.newDesigners == "" || this.newMaxPlayers == "" ||
      this.newMinAge == "" || this.newMinPlayers == "" ||
      this.newYear == "" || this.newRate == "") {
      this.errorMessage = "All Fields are required!!!";
    } else {
      const game = {
        title: this.newTitle,
        price: this.newPrice,
        year: this.newYear,
        rate: this.newRate,
        minPlayers: this.newMinPlayers,
        minAge: this.newMinAge,
        maxPlayers: this.newMaxPlayers,
        designers: this.newDesigners,
      }
      console.log(game);
      this.gamesDataService.addGame(game).then(() => this.success = " successfully added");
    }

  }

  isAuthenticated(){
    return localStorage.getItem("jwt-token");
  }

}


export class Game {
  _id!: string;
  title!: string;
  price!: number;
  year!: number;
  minAge!: number;
  maxPlayers!: number;
  minPlayers!: number;
}
