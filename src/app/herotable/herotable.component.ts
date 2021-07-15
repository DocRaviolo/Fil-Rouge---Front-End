import { Component, OnInit } from '@angular/core';
import {GameService} from "../game.service";

@Component({
  selector: 'app-herotable',
  templateUrl: './herotable.component.html',
  styleUrls: ['./herotable.component.css']
})
export class HerotableComponent implements OnInit {
  heroList= this.gameService.getHeroList();

  constructor(private gameService : GameService) { }

  ngOnInit(): void {
  }

  updateHero(id: number) {

  }

  deleteHero(id: number) {

  }
}
