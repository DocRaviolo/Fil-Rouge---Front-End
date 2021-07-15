import { Component, OnInit } from '@angular/core';
import {GameService} from "../game.service";


@Component({
  selector: 'app-weapontable',
  templateUrl: './weapontable.component.html',
  styleUrls: ['./weapontable.component.css']
})
export class WeapontableComponent implements OnInit {
  weaponList= this.gameService.getWeaponList();

  constructor(private gameService : GameService) { }

  ngOnInit(): void {
  }

  deleteWeapon(id : number) {

  }

  updateWeapon(id : number) {

  }
}
