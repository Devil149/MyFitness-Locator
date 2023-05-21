package com.gymmanagement.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gymmanagement.entity.FeedBack;

@Repository
public interface FeedBackDao extends JpaRepository<FeedBack, Integer>{
	
	


}
