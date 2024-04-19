package com.example.donnation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DonationService {

    @Autowired
    private DonationRepository donationRepository;

    public Donation submitDonation(Donation donation) {
        if (!donation.isCardNumberProvided()) {
            throw new IllegalArgumentException("Card number is required.");
        }

        // Additional validation or processing logic

        return donationRepository.save(donation);
    }

    public Donation createDonation(Donation donation) {
        if (!donation.isCardNumberProvided()) {
            throw new IllegalArgumentException("Card number is required.");
        }

        return donationRepository.save(donation);
    }

    public Donation getDonationById(Long id) {
        return donationRepository.findById(id).orElse(null);
    }

    public List<Donation> getAllDonations() {
        return donationRepository.findAll();
    }

    public Donation updateDonation(Long id, Donation donation) {
        if (donationRepository.existsById(id)) {
            donation.setId(id);
            return donationRepository.save(donation);
        }
        return null;
    }

    public void deleteDonation(Long id) {
        donationRepository.deleteById(id);
    }
}
