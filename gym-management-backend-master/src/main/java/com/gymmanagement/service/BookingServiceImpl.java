package com.gymmanagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gymmanagement.dao.BookingDao;
import com.gymmanagement.entity.Booking;

@Service
public class BookingServiceImpl implements BookingService {

	@Autowired
	private BookingDao bookingDao;
	
	@Override
	public Booking addbooking(Booking booking) {
		return this.bookingDao.save(booking);
	}

	@Override
	public List<Booking> getAllBookings() {	
		return this.bookingDao.findAll();
	}

}
