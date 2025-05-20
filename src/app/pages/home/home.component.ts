import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from '../../services/game.service';
import { ButtonsComponent } from '../../components/buttons/buttons.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private router = inject(Router);
  private gameService = inject(GameService);
  
  maxLevel = 4; //Last existing level
  user = this.gameService.getName();
  level = 1;
  colours: string[] = [];

  public play(): void {
    if (this.user.length < 3 || this.user.length > 18) {
      alert("The username has to be between 3 and 18 characters");
    }
    else {
      this.gameService.setName(this.user);
      this.gameService.setLevel(this.level);
      ButtonsComponent.restart();
      this.router.navigate(['level' + this.level]);
    }
  }

  public options(): void {
    alert("Coming soon!")
    // this.router.navigate(['options'])
  }

  public lateboard(): void {
    this.router.navigate(['lateboard'])
  }

  public gotoLevelLeft(): void {
    if (this.level === 1) {
      this.gotoLevel(this.maxLevel);
    }
    else {
      this.gotoLevel(this.level - 1);
    }
  }

  public gotoLevelRight(): void {
    if (this.level === this.maxLevel) {
      this.gotoLevel(1);
    }
    else {
      this.gotoLevel(this.level + 1);
    }  }

  private gotoLevel(levelChosen: number): void {
    this.level = levelChosen;
  }
}
