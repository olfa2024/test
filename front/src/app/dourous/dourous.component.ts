
import { CommonModule } from '@angular/common';

import { Component, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-dourous',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dourous.component.html',
  styleUrls: ['./dourous.component.css']
})
export class DourousComponent {


  constructor() { }

  getAudio(url: string): void {
    const audioPlayer = document.getElementById('audioPlayer') as HTMLAudioElement;
    audioPlayer.src = 'https://archive.org/download/dourous_islam/' + url;
    audioPlayer.play();
  }

}
