package com.abctelecom.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "zipcodes")
public class Zipcode {

	@Id
	private Long id;

	@Column
	private String zipcode;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getZipcode() {
		return zipcode;
	}

	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}

}
