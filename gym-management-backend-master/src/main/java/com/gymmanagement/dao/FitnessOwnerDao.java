package com.gymmanagement.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.gymmanagement.entity.FitnessOwner;

@Repository
public interface FitnessOwnerDao extends JpaRepository<FitnessOwner, Integer>{
	
	FitnessOwner findByEmailIdAndPassword(String emailId, String password);
	List<FitnessOwner> findByCity(String city);
	List<FitnessOwner> findByPin(String pin);
	/*List<FitnessOwner> findByNameContainingIgnoreCase(String name);
	FitnessOwner findByEmail(String Email);*/

}
