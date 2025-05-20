import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private name: string = 'User';
  private round: number = 0;
  private level: number = 1;

  private lateboardUser: string[][] = [[],[],[],[]];
  private lateboardRound: number[][] = [[],[],[],[]];

  constructor() {}

  public getName() {
    return this.name
  }

  public setName(name: string) {
    this.name = name;
  }

  public getRound() {
    return this.round
  }

  public setRound(round: number) {
    this.round = round;
  }

  public getLevel() {
    return this.level
  }

  public setLevel(level: number) {
    this.level = level;
  }

  getLateboardRound(level: number): number[] {
    return this.lateboardRound[level - 1]
  }

  getLateboardUser(level: number): string[] {
    return this.lateboardUser[level - 1]
  }

  public addGame() {
    let position: number = this.lateboardRound[this.level - 1].length;
    this.lateboardUser[this.level - 1].push('');
    this.lateboardRound[this.level - 1].push(0);
    for (let index = 0; index < this.lateboardRound[this.level - 1].length; index++) {
      if (this.lateboardRound[this.level - 1][index] < this.round) {
        position = index;
        break;
      }
    }
    if (position == this.lateboardRound[this.level - 1].length) {
      this.lateboardUser[this.level - 1].push(this.name);
      this.lateboardRound[this.level - 1].push(this.round);
    }
    else {
      for (let index = this.lateboardRound[this.level - 1].length - 1; index > position; index--) {
        this.lateboardRound[this.level - 1][index] = this.lateboardRound[this.level - 1][index - 1];
        this.lateboardUser[this.level - 1][index] = this.lateboardUser[this.level - 1][index - 1];
      }
    }
    
    this.lateboardRound[this.level - 1][position] = this.round;
    this.lateboardUser[this.level - 1][position] = this.name;
    if (this.lateboardRound[this.level - 1].length >= 10) {
      this.lateboardRound[this.level - 1].splice(10);
      this.lateboardUser[this.level - 1].splice(10);
    }
  }
}
