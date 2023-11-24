package com.abctelecom.entity;

import java.time.LocalDate;
import java.util.Set;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.*;


@Entity
@Table
public class Manager {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private User user;
	
	@CreationTimestamp
	private LocalDate createdOn;
	
	@ElementCollection
	@JoinTable(name = "manager_pincode",joinColumns = @JoinColumn(name = "manager_id"))
	private Set<String> zipcode;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public LocalDate getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(LocalDate createdOn) {
		this.createdOn = createdOn;
	}

	public Set<String> getZipcode() {
		return zipcode;
	}

	public void setZipcode(Set<String> zipcode) {
		this.zipcode = zipcode;
	}
	
		
}