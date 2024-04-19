package com.example.gestionrecettes.ingredient;

import jakarta.persistence.*;

@Entity
@Table(name = "ingredients")
public class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_ingredient")
    private Long id;

    @Column(name = "Titre", length = 100)
    private String titre;

    @Column(name = "Description", columnDefinition = "TEXT")
    private String description;

    @Column(name = "URL_video", length = 255)
    private String videoUrl;

    @Column(name = "URL_image", length = 255)
    private String imageUrl;

    public Ingredient() {
        // Constructeur par défaut
    }

    public Ingredient(String titre, String description, String videoUrl, String imageUrl) {
        this.titre = titre;
        this.description = description;
        this.videoUrl = videoUrl;
        this.imageUrl = imageUrl;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getVideoUrl() {
        return videoUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
