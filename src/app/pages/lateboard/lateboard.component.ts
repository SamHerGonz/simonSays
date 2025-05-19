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
  private gameService = inject(GameService);
  rounds: number[] = [];
  users: string[] = [];

  showLevel(level: number): void {
    this.rounds = this.gameService.getLateboardRound(level);
    console.log(this.rounds)
  }

  home(): void {
    this.router.navigate([''])
  }
}
