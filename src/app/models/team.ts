import { Player } from "./player";
import { Tournament } from "./tournament";

export class Team {
  constructor(
      teamId:number,
      teamName:string,
      city:string,
      trophies:string,
      players:Player[],
      tournaments:Tournament[]
  ){}
}
