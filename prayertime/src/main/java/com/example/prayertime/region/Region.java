package com.example.prayertime.region;


import jakarta.persistence.*;

@Entity
@Table(name = "regions")
public class Region {
    @Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name = "id_region")
private Long id;

    @Column(name = "nom", length = 50)
    private String nom;

    public Region() {
        // Default constructor
    }

    public Region(String nom) {
        this.nom = nom;
    }

    // Getter for id
    public Long getId() {
        return id;
    }

    // Setter for id
    public void setId(Long id) {
        this.id = id;
    }

    // Getter for nom
    public String getNom() {
        return nom;
    }

    // Setter for nom
    public void setNom(String nom) {
        this.nom = nom;
    }
}