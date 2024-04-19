// audio.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Audio} from "../saad/audio.modal";

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private apiUrl = 'http://localhost:8080/api/audio/saad'; // Remplacez ceci par l'URL de votre backend

  constructor(private http: HttpClient) {}

  getAllAudio(): Observable<Audio[]> {
    return this.http.get<Audio[]>(this.apiUrl);
  }

  getAudioById(id: number): Observable<Audio> {
    return this.http.get<Audio>(`${this.apiUrl}/${id}`);
  }

  addAudio(audio: Audio): Observable<Audio> {
    return this.http.post<Audio>(this.apiUrl, audio);
  }

  updateAudio(id: number, updatedAudio: Audio): Observable<Audio> {
    return this.http.put<Audio>(`${this.apiUrl}/${id}`, updatedAudio);
  }

  deleteAudio(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
