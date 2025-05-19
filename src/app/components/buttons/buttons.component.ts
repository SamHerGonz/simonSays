import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})

export class ButtonsComponent {
  @Input() colour: string = '';
  isLighted: boolean = false;
  static time = 300;

  public static restart(): void {
    ButtonsComponent.time = 300;
  }
  setColour(colour: string) {
    this.colour = colour;
  }

  light() {
    this.isLighted = true;
    setTimeout(() => {
      this.isLighted = false;
    }, ButtonsComponent.time);
  }

}
