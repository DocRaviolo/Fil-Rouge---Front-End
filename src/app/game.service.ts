import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Gameuser} from "./gameuser";
import {Hero} from "./hero";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  baseAPIUrl = 'http://localhost:8080/api/';

  constructor(private http:HttpClient) { }

  getUserList() {
    return this.http.get<Gameuser[]>(this.baseAPIUrl+'admin/gameuser')
  }

  getHeroList() {
    return this.http.get<Hero[]>(this.baseAPIUrl+'admin/hero')
  }

  //getCardList(timelineId: number) {
   // return this.http.get<Card[]>(this.baseAPIUrl+'/'+ timelineId + '/card')
 // }

  //deleteCard(cardId: number) {
  //  return this.http.delete<Card>(this.baseAPIUrl+'/1/card/' + cardId)
 // }
}
