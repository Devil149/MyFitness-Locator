package com.gymmanagement.controller;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gymmanagement.dao.FitnessOwnerDao;
import com.gymmanagement.dto.AddGymOwnerRequestDto;
import com.gymmanagement.dto.OwnerLoginRequest;
import com.gymmanagement.dto.UserLoginRequest;
import com.gymmanagement.entity.Booking;
import com.gymmanagement.entity.Customer;
import com.gymmanagement.entity.FitnessOwner;
import com.gymmanagement.service.BookingService;
import com.gymmanagement.service.FitnessOwnerService;
import com.gymmanagement.utility.Helper;
import com.gymmanagement.utility.StorageService;

@RestController
@RequestMapping("api/owner/")
@CrossOrigin(origins = "http://localhost:3000")
public class FitnessOwnerController {

	@Autowired
	FitnessOwnerService fitnessOwnerService;
	
	@Autowired
	FitnessOwnerDao fitnessOwnerDao;
	
	@Autowired
	StorageService storageService;
	
	@Autowired
	BookingService bookingService;
	
	@PostMapping("register")
	public ResponseEntity<?> addProduct(@Valid AddGymOwnerRequestDto addGymOwnerRequestDto) {
		System.out.println("recieved request for Register Fitness owner");
		System.out.println(addGymOwnerRequestDto);
		
		//String clientId = Helper.getAlphaNumericId();
		
		FitnessOwner fitnessOwner= addGymOwnerRequestDto.toEntity(addGymOwnerRequestDto);
		//fitnessOwner.setClientId(clientId);
		
		fitnessOwnerService.registerOwner(fitnessOwner, addGymOwnerRequestDto.getPic());
		
		System.out.println("response sent!!!");
		return ResponseEntity.ok(fitnessOwner);
		
	}
	
	@PostMapping("login")
	public ResponseEntity<?> loginfitnessowner(@RequestBody OwnerLoginRequest loginRequest) {
		System.out.println("recieved request for login customer");
		
		System.out.println(loginRequest);
		
		FitnessOwner fitnessOwner = fitnessOwnerService.loginfitnessowner(loginRequest.getEmailId(), loginRequest.getPassword());

		System.out.println("response sent!!!");
		return ResponseEntity.ok(fitnessOwner);
	}
	
	
	@GetMapping("allbookings")
		public ResponseEntity<?> getAllbooking() throws Exception {
		
		System.out.println("request came for getting all bookings");
		
		List<Booking> booking = new ArrayList<Booking>();
		
		booking = bookingService.getAllBookings();
		
		System.out.println("response sent!!!");
		
		return ResponseEntity.ok(booking);
		
	}
	
}
