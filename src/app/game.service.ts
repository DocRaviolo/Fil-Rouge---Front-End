import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Gameuser} from "./gameuser";
import {Hero} from "./hero";
import {Decorelement} from "./decorelement";
import {Enemy} from "./enemy";
import {Weapon} from "./weapon";
import {Defenseequipment} from "./defenseequipment";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  baseAPIUrl = 'http://localhost:8080/api/';

  constructor(private http:HttpClient) { }

  // Méthode pour récupérer la liste des Users
  getUserList() {
    return this.http.get<Gameuser[]>(this.baseAPIUrl+'admin/gameuser')
  }

  // Méthode pour récupérer la liste des Heros
  getHeroList() {
    return this.http.get<Hero[]>(this.baseAPIUrl+'admin/hero')
  }

  // Méthode pour récupérer la liste des Décors
  getDecorList() {
    return this.http.get<Decorelement[]>(this.baseAPIUrl+'admin/decorelement')
  }

  // Méthode pour récupérer la liste des Ennemis
  getEnemyList() {
    return this.http.get<Enemy[]>(this.baseAPIUrl+'admin/enemy')
  }

  // Méthode pour récupérer la liste des Armes
  getWeaponList() {
    return this.http.get<Weapon[]>(this.baseAPIUrl+'admin/weapon')

  }
  // Méthode pour récupérer la liste des Equipements Défensifs
  getDefenseList() {
    return this.http.get<Defenseequipment[]>(this.baseAPIUrl+'admin/defenseequipment')

  }

//getCardList(timelineId: number) {
  // return this.http.get<Card[]>(this.baseAPIUrl+'/'+ timelineId + '/card')
  // }

  //deleteCard(cardId: number) {
  //  return this.http.delete<Card>(this.baseAPIUrl+'/1/card/' + cardId)
  // }


}
