package com.example.gestionrecettes.recipe;


import jakarta.persistence.*;

@Entity
@Table(name = "recettes")
public class recipe{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_recette")
    private Long id;

    @Column(name = "Titre", length = 100)
    private String titre;

    @Column(name = "Description", columnDefinition = "TEXT")
    private String description;

    @Column(name = "URL_image", length = 255)
    private String imageUrl;

    @Column(name = "URL_video", length = 255)
    private String videoUrl;

    public recipe() {
        // Constructeur par défaut
    }

    public recipe(String titre, String description, String imageUrl, String videoUrl) {
        this.titre = titre;
        this.description = description;
        this.imageUrl = imageUrl;
        this.videoUrl = videoUrl;
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

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getVideoUrl() {
        return videoUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
    }
}
