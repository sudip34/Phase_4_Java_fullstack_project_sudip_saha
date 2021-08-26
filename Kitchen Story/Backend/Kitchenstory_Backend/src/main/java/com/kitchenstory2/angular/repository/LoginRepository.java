package com.kitchenstory2.angular.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.kitchenstory2.angular.entity.Login;

@CrossOrigin("http://localhost:4200")
public interface LoginRepository extends JpaRepository<Login, Integer> {
	
	@Query("SELECT p FROM Login p WHERE p.adminName=:keyword")
    public Login search(@Param("keyword") String keyword);

}
