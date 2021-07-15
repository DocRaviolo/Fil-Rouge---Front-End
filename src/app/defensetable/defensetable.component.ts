import { Component, OnInit } from '@angular/core';
import {GameService} from "../game.service";

@Component({
  selector: 'app-defensetable',
  templateUrl: './defensetable.component.html',
  styleUrls: ['./defensetable.component.css']
})
export class DefensetableComponent implements OnInit {
  defenseList = this.gameService.getDefenseList();

  constructor(private gameService : GameService) { }

  ngOnInit(): void {
  }

  updateDefense(id : number) {

  }

  deleteDefense(id: number) {

  }
}
