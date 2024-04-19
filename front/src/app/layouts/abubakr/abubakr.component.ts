import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Audio} from "../abubakr/audio.modal";
import {AudioService} from "../abubakr/audio.service";

@Component({
  selector: 'app-abubakr',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './abubakr.component.html',
  styleUrls: ['./abubakr.component.css']
})
export class AbubakrComponent implements OnInit {
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
