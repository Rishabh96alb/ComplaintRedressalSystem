package com.abctelecom.entity;

import java.time.LocalDate;
import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.*;


@Entity
@Table
public class Engineer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;	
	
	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private User user;
	
	@CreationTimestamp
	private LocalDate createdOn;	
	
	@Column
	private String zipcode;	
	

	public Engineer() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Engineer(Long id, User user, LocalDate createdOn, String zipcode) {
		super();
		this.id = id;
		this.user = user;
		this.createdOn = createdOn;
		this.zipcode = zipcode;
	}

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

	public String getZipcode() {
		return zipcode;
	}

	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}
	
	
}