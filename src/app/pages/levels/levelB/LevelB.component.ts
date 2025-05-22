import { Component, inject, ViewChild } from '@angular/core';
import { ButtonsComponent } from "../../../components/buttons/buttons.component";
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { GameService } from '../../../services/game.service';

@Component({
  selector: 'app-level2',
  standalone: true,
  imports: [ButtonsComponent, NgClass],
  templateUrl: './levelB.component.html',
  styleUrls: ['./levelB.component.scss', '../levels.scss'],
  
})
export class LevelBComponent {
ngOnInit(): void {
    this.startRound();
  }
  private router = inject(Router);
  private gameService = inject(GameService);

  // All the buttons are set as childs
  @ViewChild('colRed',{static: true}) button1!: ButtonsComponent;
  @ViewChild('colOrange',{static: true}) button2!: ButtonsComponent;
  @ViewChild('colBlue',{static: true}) button3!: ButtonsComponent;
  @ViewChild('colPurple',{static: true}) button4!: ButtonsComponent;
  @ViewChild('colYellow',{static: true}) button5!: ButtonsComponent;
  @ViewChild('colLime',{static: true}) button6!: ButtonsComponent;
  @ViewChild('colGreen',{static: true}) button7!: ButtonsComponent;
  @ViewChild('colPalegreen',{static: true}) button8!: ButtonsComponent;

  // @ViewChild(ButtonsComponent) button!: ButtonsComponent;
  colours: string[] = ['red','orange','blue','purple','yellow','lime','green','palegreen'];
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
        // Verifies which colour to show
        if (element === this.button1.colour) {
          this.button1.light()
        }
        if (element === this.button2.colour) {
          this.button2.light()
        }
        if (element === this.button3.colour) {
          this.button3.light()
        }
        if (element === this.button4.colour) {
          this.button4.light()
        }
        if (element === this.button5.colour) {
          this.button5.light()
        }
        if (element === this.button6.colour) {
          this.button6.light()
        }
        if (element === this.button7.colour) {
          this.button7.light()
        }
        if (element === this.button8.colour) {
          this.button8.light()
        }

        if (index === this.chose.length - 1) {
          this.done = true;
        }
      }, this.time * index);
    })
    if (this.maxtime < this.time) {
      this.time -= 50;
    }
    if (ButtonsComponent.time < 75 && this.round % 3 === 0) {
      ButtonsComponent.time -= 25
    }
  }

  public verifyColour(colour: string):void {
    if (this.done) {
    this.playerChose.push(colour);
      if (this.playerChose[this.playerChose.length - 1] === this.chose[this.playerChose.length - 1]) {
        if (this.playerChose.length === this.chose.length) {
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