package com.example.security.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.security.service.FollowerService;
import com.example.security.entity.Followers;

@RestController

public class FollowerCotroller {

	@Autowired
	private FollowerService ser;

	@GetMapping("/show")
	public List<Followers> getting() {
		return ser.showFollower();
	}

	@GetMapping("/show/{id}")
	public Optional<Followers> gettingById(@PathVariable int id) {
		return ser.showById(id);
	}

	// @GetMapping("/get/{name}")
	// public List<Followers> getbyName(@PathVariable String s) {
	// return ser.showByName(s);
	// }

	@DeleteMapping("/delete/{id}")
	public String deleteUsingId(@PathVariable int id) {
		return ser.deletebyId(id);
	}

}
