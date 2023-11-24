package com.abctelecom.dto;

import java.util.Set;

import com.abctelecom.entity.User;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CustomerDto {

	private Long id;
	private User user;
	private Set<String> serviceType;
	private String address;
	private String zipcode;

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