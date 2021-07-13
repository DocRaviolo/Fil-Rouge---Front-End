import {Hero} from "./hero";

export interface Gameuser {
  id: number;
  name: string;
  level: number;
  hero: Hero;
}
