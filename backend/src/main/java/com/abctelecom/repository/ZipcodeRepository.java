package com.abctelecom.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.abctelecom.entity.Zipcode;

@Repository
public interface ZipcodeRepository extends JpaRepository<Zipcode, Long> {

}
