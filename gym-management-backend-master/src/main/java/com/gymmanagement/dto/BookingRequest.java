package com.gymmanagement.dto;

import java.util.Date;

public class BookingRequest {

private int id;
	
	private String name;
	
	private String emailId;
	
	private long contact;
	
	private String date;
	
	private int age;
	
	private String sex;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

	

	public long getContact() {
		return contact;
	}

	public void setContact(long contact) {
		this.contact = contact;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
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

	@Override
	public String toString() {
		return "BookingRequest [id=" + id + ", name=" + name + ", emailId=" + emailId + ", contact=" + contact
				+ ", date=" + date + ", age=" + age + ", sex=" + sex + "]";
	}

}
