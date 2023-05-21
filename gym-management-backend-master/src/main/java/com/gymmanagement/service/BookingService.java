package com.gymmanagement.service;

import java.util.List;

import com.gymmanagement.entity.Booking;

public interface BookingService {

	Booking addbooking(Booking booking);
	List<Booking> getAllBookings();
}
