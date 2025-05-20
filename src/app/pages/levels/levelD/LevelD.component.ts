import { Component, inject, ViewChild } from '@angular/core';
import { ButtonsComponent } from "../../../components/buttons/buttons.component";
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { GameService } from '../../../services/game.service';

@Component({
  selector: 'app-level4',
  standalone: true,
  imports: [ButtonsComponent, NgClass],
  templateUrl: './levelD.component.html',
  styleUrls: ['./levelD.component.scss', '../levels.scss'],
})
export class LevelDComponent {
  ngOnInit(): void {
    this.startRound();
  }
  private router = inject(Router);
  private gameService = inject(GameService);

  @ViewChild('colRed',{static: true}) buttonRed!: ButtonsComponent;
  @ViewChild('colBlue',{static: true}) buttonBlue!: ButtonsComponent;
  @ViewChild('colYellow',{static: true}) buttonYellow!: ButtonsComponent;
  @ViewChild('colGreen',{static: true}) buttonGreen!: ButtonsComponent;
  
    // @ViewChild(ButtonsComponent) button!: ButtonsComponent;
  colours: string[] = ['red', 'blue','yellow','green'];
  chose: string[] = [];
  playerChose: string[] = [];
  done:boolean = false
  round = this.chose.length;
  time = 1000;
  maxtime = 150;
  isComplete: boolean = false;

  public startRound():void {
    this.round++;
    this.playerChose = [];
    setTimeout(() => {
      this.addColour();
      this.showColours();
      this.isComplete = false;
    }, 1000);
  }

  private addColour():void {
    this.chose.push(this.colours[Math.floor(Math.random() * this.colours.length)]);
  }
  
  private showColours():void {
    this.chose.forEach ((element, index) => {
      setTimeout(() => {
        if (element === this.buttonRed.colour) {
          this.buttonRed.light()
        }
        if (element === this.buttonBlue.colour) {
          this.buttonBlue.light()
        }
        if (element === this.buttonYellow.colour) {
          this.buttonYellow.light()
        }
        if (element === this.buttonGreen.colour) {
          this.buttonGreen.light()
        }
        if (index === this.chose.length - 1) {
          this.done = true;
        }
      }, this.time * index);
    })
    if (this.maxtime < this.time) {
      this.time -= 50;
    }
    if (ButtonsComponent.time < 75 && this.round % 3 == 0) {
      ButtonsComponent.time -= 25
    }
  }
  
  public verifyColour(colour: string):void {
    if (this.done) {
    this.playerChose.push(colour);
      if (this.playerChose[this.playerChose.length - 1] == this.chose[this.playerChose.length - 1]) {
        if (this.playerChose.length == this.chose.length) {
          this.isComplete = true;
          this.done = false;
          this.startRound();
        } 
      }
      else {
        this.endGame()
      }
    }
  }
  
  public back():void {
    this.router.navigate([''])
  }
  
  private endGame():void {
    this.gameService.setRound(this.round);
    this.gameService.addGame();
    this.router.navigate(['lost'])
  }
}
