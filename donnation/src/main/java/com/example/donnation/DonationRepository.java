package com.example.donnation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DonationRepository extends JpaRepository<Donation, Long> {

    // Vous pouvez ajouter des méthodes personnalisées pour les requêtes spécifiques ici si nécessaire
}

