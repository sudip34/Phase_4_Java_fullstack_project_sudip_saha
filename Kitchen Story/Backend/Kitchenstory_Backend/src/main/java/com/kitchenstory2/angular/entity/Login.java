package com.kitchenstory2.angular.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
@Data
@Entity
@Table(name="login")
public class Login {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
	private int id;
	
	@Column(name = "admin_name")
	private String adminName;
	
	@Column(name = "password")
	private String password;
	
	public Login( String adminName, String password) {
		this.adminName = adminName;
		this.password = password;
	}

	public Login() {
		
	}
	

}
