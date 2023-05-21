package com.gymmanagement.entity;
import javax.persistence.*;

import org.springframework.web.multipart.MultipartFile;

@Entity
@Table
public class FitnessOwner 
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

   
    private String gymname;

    private String name;

    private String contact;
    
    private String emailId;
    
    private String password;
    
    private String pin;
    
    private String address;
    
    private String state;
    
    private String city;

    private String pic;
    


    public FitnessOwner(int id, String gymname, String name, String contact, String emailId, String password, String pin,
			String address, String state, String city, String pic) {
		super();
		this.id = id;
		this.gymname = gymname;
		this.name = name;
		this.contact = contact;
		this.emailId = emailId;
		this.password = password;
		this.pin = pin;
		this.address = address;
		this.state = state;
		this.city = city;
		this.pic = pic;
	}

	public FitnessOwner() {
    }

	public int getId() {
		return id;
	}

	public void setId(int id) {
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

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	

	public String getPin() {
		return pin;
	}

	public void setPin(String pin) {
		this.pin = pin;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getPic() {
		return pic;
	}

	public void setPic(String pic) {
		this.pic = pic;
	}

	@Override
	public String toString() {
		return "FitnessOwner [id=" + id + ", gymname=" + gymname + ", name=" + name + ", contact=" + contact
				+ ", emailId=" + emailId + ", password=" + password + ", pin=" + pin + ", address=" + address
				+ ", state=" + state + ", city=" + city + ", pic=" + pic + "]";
	}


}