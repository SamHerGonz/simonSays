import { Component, inject } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lateboard',
  standalone: true,
  imports: [],
  templateUrl: './lateboard.component.html',
  styleUrl: './lateboard.component.scss'
})
export class LateboardComponent {
  private router = inject(Router);
  gameService = inject(GameService);
  choseLevel: number = 1;

  public showLevel(level: number): void {
    this.choseLevel = level
  }

  public home(): void {
    this.router.navigate([''])
  }
}
