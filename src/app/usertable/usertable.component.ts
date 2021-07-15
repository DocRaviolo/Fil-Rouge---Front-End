import { Component, OnInit } from '@angular/core';
import {GameService} from "../game.service";

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  userList= this.gameService.getUserList();


  constructor(private gameService : GameService) { }

  ngOnInit(): void {
  }

  updateUser(id : number) {

  }

  deleteUser(id : number) {

  }
}
