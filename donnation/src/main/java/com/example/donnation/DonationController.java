package com.example.donnation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/donations")
public class DonationController {

    @Autowired
    private DonationService donationService;

    @PostMapping
    public ResponseEntity<Donation> createDonation(@RequestBody Donation donation) {
        if (!donation.isCardNumberProvided()) {
            return ResponseEntity.badRequest().build(); // Return a bad request response if card number is missing
        }

        Donation createdDonation = donationService.createDonation(donation);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdDonation);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Donation> getDonationById(@PathVariable Long id) {
        Donation donation = donationService.getDonationById(id);
        if (donation != null) {
            return ResponseEntity.ok(donation);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Ajoutez cette méthode pour gérer les requêtes GET sur /api/donations
    @GetMapping
    public ResponseEntity<List<Donation>> getAllDonations() {
        List<Donation> donations = donationService.getAllDonations();
        return ResponseEntity.ok(donations);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Donation> updateDonation(@PathVariable Long id, @RequestBody Donation donation) {
        Donation updatedDonation = donationService.updateDonation(id, donation);
        if (updatedDonation != null) {
            return ResponseEntity.ok(updatedDonation);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDonation(@PathVariable Long id) {
        donationService.deleteDonation(id);
        return ResponseEntity.noContent().build();
    }
}
