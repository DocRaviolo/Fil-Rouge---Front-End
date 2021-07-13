import {Gameuser} from "./gameuser";
import {Weapon} from "./weapon";
import {Defenseequipment} from "./defenseequipment";

export interface Game {
  id: number;
  gameuser: Gameuser;
  weapon: Weapon;
  defenseequipment: Defenseequipment;
  points: number;
  lives: number;
}
