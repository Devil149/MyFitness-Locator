package com.gymmanagement.service;

import java.util.List;
import org.springframework.web.multipart.MultipartFile;
import com.gymmanagement.entity.Customer;
import com.gymmanagement.entity.FeedBack;
public interface CustomerService {
	
	void registerCustomer(Customer customer, MultipartFile customerPic);
	void postFeedbackService(FeedBack feedback);
	List<Customer> getAllCustomer();
	Customer loginCustomer(String emailId, String password);
	List<Customer> getCustomerByClientId(String clientId);
	List<Customer> getCustomerByName(String name);
	List<FeedBack> getAllFeedbacks();
	Customer getCustomerByContact(String contact);

}
