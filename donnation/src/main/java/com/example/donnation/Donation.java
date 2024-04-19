package com.example.donnation;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Entity
@Data
@Table(name= "donation")
public class Donation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "firstname", nullable = false)
    private String firstName;

    @Column(name = "lastname", nullable = false)
    private String lastName;

    private String email;

    @Column(name = "homeaddress", nullable = false)
    private String homeAddress;

    private String city;
    private String state;

    @NotBlank(message = "Card name is required")
    @Column(name = "cardname")
    private String cardName;

    @Column(name = "expirydate", nullable = false)
    private String expiryDate;

    @Column(name = "cardnumber", nullable = false)
    private String cardNumber;

    private String cvv;

    @Column(name = "donationtotal", nullable = false)
    private double donationTotal;

    // Default constructor
    public Donation() {
    }

    // Constructor with all fields
    public Donation(String firstName, String lastName, String email, String homeAddress, String city, String state, String cardName, String expiryDate, String cardNumber, String cvv, double donationTotal) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.homeAddress = homeAddress;
        this.city = city;
        this.state = state;
        this.cardName = cardName;
        this.expiryDate = expiryDate;
        this.cardNumber = cardNumber;
        this.cvv = cvv;
        this.donationTotal = donationTotal;
    }

    // Getters and setters for all fields
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getHomeAddress() {
        return homeAddress;
    }

    public void setHomeAddress(String homeAddress) {
        this.homeAddress = homeAddress;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCardName() {
        return cardName;
    }

    public void setCardName(String cardName) {
        this.cardName = cardName;
    }

    public String getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(String expiryDate) {
        this.expiryDate = expiryDate;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public String getCvv() {
        return cvv;
    }

    public void setCvv(String cvv) {
        this.cvv = cvv;
    }

    public double getDonationTotal() {
        return donationTotal;
    }

    public void setDonationTotal(double donationTotal) {
        this.donationTotal = donationTotal;
    }

    public boolean isCardNumberProvided() {
        return cardNumber != null && !cardNumber.isEmpty();
    }
}
