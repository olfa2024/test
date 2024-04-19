import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Audio} from "./faresaudio.modal";
import {AudioService} from "./audio.service";


@Component({
  selector: 'app-fares',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fares.component.html',
  styleUrls: ['./fares.component.css']
})
export class FaresComponent implements OnInit {
  title = 'Al-Fatiha avec barre de progression audio';
  surahName = '';
  audioUrl = '';
  progress = 0;
  audios: Audio[] = [];

  constructor(private audioService: AudioService) {}

  ngOnInit() {
    this.audioService.getAllAudio().subscribe((data: Audio[]) => {
      if (data.length > 0) {
        this.audios = data; // Assigner le tableau d'objets audio à la variable audios
        const firstAudio = data[0];
        this.surahName = firstAudio.title;
        this.audioUrl = firstAudio.audioUrl;
        this.setupAudioEventListener();
      }
    });
  }

  setupAudioEventListener() {
    const audio = document.getElementById('audio') as HTMLAudioElement;
    const progressBar = document.querySelector('#progressBar div') as HTMLElement;

    audio.addEventListener('timeupdate', () => {
      this.progress = (audio.currentTime / audio.duration) * 100;
    });

    audio.addEventListener('ended', () => {
      this.progress = 0;
    });
  }
}
