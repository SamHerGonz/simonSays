import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-lost',
  standalone: true,
  imports: [],
  templateUrl: './lost.component.html',
  styleUrl: './lost.component.scss',
})

export class LostComponent {

  private router = inject(Router);
  private gameService = inject(GameService);
  round: number = this.gameService.getRound();
  rounds: number[] = this.gameService.getLateboardRound(this.gameService.getLevel());
  users: string[] = this.gameService.getLateboardUser(this.gameService.getLevel());

  home(): void {
    this.router.navigate([''])
  }

  restart(): void {
    this.router.navigate(['level' + this.gameService.getLevel()])
  }
}
