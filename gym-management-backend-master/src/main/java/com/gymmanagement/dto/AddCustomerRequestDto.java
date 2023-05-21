package com.gymmanagement.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.springframework.beans.BeanUtils;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.gymmanagement.entity.Customer;

public class AddCustomerRequestDto {
	
	private int id;
	
	@Pattern(regexp = "^[a-zA-Z\\s]+$" , message ="Invalid Name")
	private String name;
	
	@NotNull
	private int age;
	
	@NotBlank
	private String sex;
	
	@NotBlank
	private String weight;
	
	@Email
	private String emailId;
	
	@Pattern(regexp = "^[0-9]{10}$", message = "Invalid mobile number")
	private String contact;
	
	@NotBlank
	private String address;
	
	@JsonIgnore
	@Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=\\S+$).{8,}$", message = "Invalid password format")
	private String password;
	
	private MultipartFile pic;
	
	private String clientId;

	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}
	
	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}
	
	public String getWeight() {
		return weight;
	}

	public void setWeight(String weight) {
		this.weight = weight;
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public MultipartFile getPic() {
		return pic;
	}

	public void setPic(MultipartFile pic) {
		this.pic = pic;
	}
	
	public String getClientId() {
		return clientId;
	}

	public void setClientId(String clientId) {
		this.clientId = clientId;
	}

	public static Customer toEntity(AddCustomerRequestDto dto) {
		Customer entity=new Customer();
		BeanUtils.copyProperties(dto, entity, "pic");		
		return entity;
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "AddCustomerRequestDto [id=" + id + ", name=" + name + ", age=" + age + ", sex=" + sex + ", weight="
				+ weight + ", emailId=" + emailId + ", contact=" + contact + ", address=" + address + ", password="
				+ password + ", pic=" + pic + "]";
	}

}
