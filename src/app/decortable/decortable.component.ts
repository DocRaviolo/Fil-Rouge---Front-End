import { Component, OnInit } from '@angular/core';
import {GameService} from "../game.service";

@Component({
  selector: 'app-decortable',
  templateUrl: './decortable.component.html',
  styleUrls: ['./decortable.component.css']
})
export class DecortableComponent implements OnInit {
 decorList= this.gameService.getDecorList();

  constructor(private gameService : GameService) { }

  ngOnInit(): void {
  }

  deleteDecor(id : number) {

  }

 updateDecor(id: number) {

  }
}
