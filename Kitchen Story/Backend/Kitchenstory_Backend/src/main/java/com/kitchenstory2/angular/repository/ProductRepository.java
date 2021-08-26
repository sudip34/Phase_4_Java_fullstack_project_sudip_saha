package com.kitchenstory2.angular.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import com.kitchenstory2.angular.entity.Product;
@CrossOrigin("http://localhost:4200")

public interface ProductRepository extends JpaRepository<Product, Long>{
	
//	 @Query("SELECT p FROM Product p WHERE p.name  %keyword%")
//	    public List<Product> search(String keyword);
	
	Page<Product> findByNameContaining(@RequestParam("name") String name, Pageable pageable);

}
