import { Component, OnInit } from '@angular/core';
import {GameService} from "../game.service";

@Component({
  selector: 'app-enemytable',
  templateUrl: './enemytable.component.html',
  styleUrls: ['./enemytable.component.css']
})
export class EnemytableComponent implements OnInit {
  enemyList= this.gameService.getEnemyList();

  constructor(private gameService : GameService) { }

  ngOnInit(): void {
  }

  updateEnemy(id: number) {

  }

  deleteEnemy(id: number) {

  }
}
