package com.kitchenstory2.angular.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kitchenstory2.angular.entity.Login;
import com.kitchenstory2.angular.entity.Product;
import com.kitchenstory2.angular.repository.LoginRepository;
import com.kitchenstory2.angular.repository.ProductRepository;


@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api")
public class ProductController {
	
	
	@Autowired	
	private ProductRepository productRepository;
	@Autowired
	private LoginRepository loginRepository;


	@GetMapping("/product")
	public List<Product> getProductAll(){
		return this.productRepository.findAll();
	}
	
	@GetMapping("/products/{id}")
	public Optional<Product> getProduct(@PathVariable("id") Long id){
		return this.productRepository.findById(id);
	}
	


	@PostMapping("/product/add")
	public void addToProduct(@RequestBody Product newProduct) {
		this.productRepository.save(newProduct);
	}
	@PutMapping("/product/update")
	public void updateProduct(@RequestBody Product theProduct ) {
		 this.productRepository.save(theProduct);
		
	}
	@DeleteMapping("/product/delete/{id}")
	public void deleteProduct(@PathVariable("id") Long id ){
		 this.productRepository.deleteById(id);
		
	}
	@GetMapping("/login")
	public List<Login> getLoginCredential(){
		return this.loginRepository.findAll();
	}
	
	@GetMapping("/login/{keyword}")
	public Login getAdmin(@PathVariable("keyword") String keyword) {
		return  this.loginRepository.search(keyword);
	}
	
	@PostMapping("/login/update")
	public void updateLogin(@RequestBody Login theLogin) {
		this.loginRepository.save(theLogin);
	}
	
	
	
	@GetMapping("/login/adminName")
	public List<String> getLoginadminNames(){
		List<Login> logins=this.loginRepository.findAll();
		List<String> adminNames=new ArrayList<>();
		for(Login login:logins) {
			adminNames.add(login.getAdminName());
		}
		
		
		return adminNames;
	}
	
	


}
