package com.gymmanagement.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.springframework.beans.BeanUtils;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.gymmanagement.entity.FitnessOwner;

public class AddGymOwnerRequestDto {
	
	private int id;
	
	@Pattern(regexp = "^[a-zA-Z\\s]+$", message = "Invalid name")
	private String gymname;
	
	@Pattern(regexp = "^[a-zA-Z\\s]+$", message = "Invalid name")
	private String name;
	
	@Pattern(regexp = "^[0-9]{10}$", message = "Invalid mobile number")	
	private String contact;
	
	@Email
	private String emailId;
	
	@JsonIgnore
	@Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=\\S+$).{8,}$", message = "Invalid password format")
	private String password;
	
	@NotBlank
	private String pin;
	
	@NotBlank
	private String address;
	
	@NotBlank
	private String city;
	
	@NotBlank
	private String state;
	
	private MultipartFile pic;
	
	
	int getId() {
		return id;
	}



	void setId(int id) {
		this.id = id;
	}


	public String getGymname() {
		return gymname;
	}



	public void setGymname(String gymname) {
		this.gymname = gymname;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public String getEmailId() {
		return emailId;
	}



	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	
	
	


	public String getContact() {
		return contact;
	}



	public void setContact(String contact) {
		this.contact = contact;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	public String getAddress() {
		return address;
	}



	public void setAddress(String address) {
		this.address = address;
	}



	public String getCity() {
		return city;
	}



	public void setCity(String city) {
		this.city = city;
	}



	public String getState() {
		return state;
	}



	public void setState(String state) {
		this.state = state;
	}
	

	public String getPin() {
		return pin;
	}


	public void setPin(String pin) {
		this.pin = pin;
	}



	public MultipartFile getPic() {
		return pic;
	}

	public void setPic(MultipartFile pic) {
		this.pic = pic;
	}


	public static FitnessOwner toEntity(AddGymOwnerRequestDto dto) {
		FitnessOwner entity=new FitnessOwner();
		BeanUtils.copyProperties(dto, entity, "pic");		
		return entity;
	}

	@Override
	public String toString() {
		return "AddGymOwnerRequestDto [id=" + id + ", gymname=" + gymname + ", name=" + name + ", contact=" + contact
				+ ", emailId=" + emailId + ", password=" + password + ", pin=" + pin + ", address=" + address
				+ ", city=" + city + ", state=" + state + ", pic=" + pic + "]";
	}

	
}


