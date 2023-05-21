package com.gymmanagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.gymmanagement.dao.FitnessOwnerDao;
import com.gymmanagement.entity.FitnessOwner;
import com.gymmanagement.utility.StorageService;

@Service
public class FitnessOwnerServiceImpl implements FitnessOwnerService {

	@Autowired
	private FitnessOwnerDao fitnessOwnerDao;
	
	@Autowired
	private StorageService storageService;
	
	@Override
	public void registerOwner(FitnessOwner fitnessOwner, MultipartFile fitnessOwnerPic) {
        String finessOwnerImageName = storageService.store(fitnessOwnerPic);
        fitnessOwner.setPic(finessOwnerImageName);
		this.fitnessOwnerDao.save(fitnessOwner);
	}


	@Override
	public List<FitnessOwner> getAllFitnessOwner() {
		return this.fitnessOwnerDao.findAll();
	}

	@Override
	public FitnessOwner loginfitnessowner(String emailId, String password) {
		return this.fitnessOwnerDao.findByEmailIdAndPassword(emailId, password);
	}


	@Override
	public List<FitnessOwner> getOwnerByCity(String city) {	
		return this.fitnessOwnerDao.findByCity(city);
	}


	@Override
	public List<FitnessOwner> getOwnerByPin(String pin) {
		return this.fitnessOwnerDao.findByPin(pin);
	}


}
