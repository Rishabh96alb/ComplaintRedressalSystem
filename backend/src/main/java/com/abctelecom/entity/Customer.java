package com.abctelecom.entity;

import java.util.Set;

import com.abctelecom.dto.CustomerDto;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.*;

@Entity
@Table
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private User user;

	@ElementCollection(fetch = FetchType.EAGER)
	@JoinTable(name = "customer_service", joinColumns = @JoinColumn(name = "customer_id"))
	private Set<String> serviceType;

	@Column
	private String address;

	@Column
	private String zipcode;
	
	

	public Customer(Long id, User user, Set<String> serviceType, String address, String zipcode) {
		super();
		this.id = id;
		this.user = user;
		this.serviceType = serviceType;
		this.address = address;
		this.zipcode = zipcode;
	}

	public Customer(CustomerDto customerDto) {
		this.user = customerDto.getUser();
		this.serviceType = customerDto.getServiceType();
		this.address = customerDto.getAddress();
		this.zipcode = customerDto.getZipcode();
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

	public Set<String> getServiceType() {
		return serviceType;
	}

	public void setServiceType(Set<String> serviceType) {
		this.serviceType = serviceType;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getZipcode() {
		return zipcode;
	}

	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}
	
	
}
