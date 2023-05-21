package com.gymmanagement.service;

import java.util.List;
import org.springframework.web.multipart.MultipartFile;

import com.gymmanagement.entity.Customer;
import com.gymmanagement.entity.FitnessOwner;
public interface FitnessOwnerService {
	
	void registerOwner(FitnessOwner fitnessOwner, MultipartFile FitnessOwnerPic);
	List<FitnessOwner> getAllFitnessOwner();
	List<FitnessOwner> getOwnerByCity(String city);
	List<FitnessOwner> getOwnerByPin(String pin);
	FitnessOwner loginfitnessowner(String emailId, String password);
	

}
