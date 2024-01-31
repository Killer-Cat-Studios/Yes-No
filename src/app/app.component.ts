import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private audio!: HTMLAudioElement;
  year: number;
  title = 'Yes-No Button';

  constructor() {
    this.year = new Date().getFullYear();
  }

  playYes() {
    this.audio = new Audio();
    this.audio.pause();
    this.audio.src = '../assets/sounds/yes.wav';
    this.audio.load();
    this.audio.play();
  }

  playNo() {
    this.audio = new Audio();
    this.audio.pause();
    this.audio.src = '../assets/sounds/no.wav';
    this.audio.load();
    this.audio.play();
  }
}
