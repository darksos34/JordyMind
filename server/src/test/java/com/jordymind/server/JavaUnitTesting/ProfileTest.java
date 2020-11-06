package com.jordymind.server.JavaUnitTesting;

import lombok.Getter;
import lombok.Setter;
import com.jordymind.server.user.User;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.Date;



@RunWith(SpringJUnit4ClassRunner.class)
@Setter
@Getter
@Entity // Announce JPA entity
public class ProfileTest implements Serializable {

    @Id // Database table key is the ID
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Create key value sequence
    private Long id;

    @Column(name = "first_name") // Create column in database with name first_name
    @Size(max = 25) // First name may consist of a maximum of 25 characters
    private String firstName;

    @Column(name = "last_name") // Create column with name last_name
    @Size(max = 25) // Last name may consist of a maximum of 25 characters
    private String lastName;

    @Column(name = "phone_number") // Create column with name phone_number
    @Size(max = 15) // Phone number may consist of a maximum of 15 characters
    private String phoneNumber;


    @Temporal(TemporalType.DATE)
    @Column(name = "date_of_birth") // Create column in database with name date_of_birth
    private Date dateOfBirth;

    @Size(max = 100)
    private String address;

    @Size(max = 6)
    private String address_number;

    @Size(max = 10)
    private String zipCode;

    @Size(max = 100) // A city may consist of a maximum of 100 characters
    private String city;

    @Size(max = 100) // A country may consist of a maximum of 100 characters
    private String country;

    @OneToOne(fetch = FetchType.LAZY, optional = false) // Fetch the related entity lazily (only when needed)
    @JoinColumn(name = "user_id", nullable = false) // Profile is the owner of this relationship
    private User user;

    // All Args Constructor
    public ProfileTest(String firstName, String lastName, String phoneNumber, Date dateOfBirth, String address, String address_number, String zipCode, String city, String country) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;

        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.address_number = address_number;
        this.zipCode = zipCode;
        this.city = city;
        this.country = country;
    }


    // Omit getter to avoid inifinite loop
    public User getUser() {
        return null;
    }

}
