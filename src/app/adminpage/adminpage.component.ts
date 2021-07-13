import { Component, OnInit } from '@angular/core';
import { GameService} from "../game.service";

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  //Récupération de la liste des users :
  //Etape 1: import { GameService} from "../game.service";
  //Etape 2 : private gameService : GameService dans le constructor
  //Etape 3:
  userList= this.gameService.getUserList();

  constructor(
    private gameService : GameService,
  ) { }

  ngOnInit(): void {
  }

  buttonUser() {

  }
}
