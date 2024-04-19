package com.example.quran.soudais;

import jakarta.persistence.*;



@Entity
@Table(name= "soudais")
public class SoudaisAudio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(name = "audio_url", length = 100)
    private String audioUrl;

    // Constructeur avec paramètres
    public SoudaisAudio (String title, String audioUrl) {
        this.title = title;
        this.audioUrl = audioUrl;
    }

    public SoudaisAudio () {

    }

    // Implémentez les méthodes getters et setters pour les attributs id, titre et audioUrl

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAudioUrl() {
        return audioUrl;
    }

    public void setAudioUrl(String audioUrl) {
        this.audioUrl = audioUrl;
    }
}