package com.starboy.eCommerce.controller;

import com.starboy.eCommerce.dto.UserDTO;
import com.starboy.eCommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private UserService userService;


    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody UserDTO userDTO) {
        try {
            String message = userService.register(userDTO);
            return ResponseEntity.ok(message);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

//    @GetMapping("/productdropdown")
//    public ResponseEntity<?> getItemDropdown(@RequestBody UserDTO userDTO) {
//        try {
//            String message = productService.itemDropdown(userDTO);
//            return ResponseEntity.ok(message);
//        } catch (RuntimeException e){
//            return ResponseEntity.badRequest().body(e.getMessage());
//        }
//    }
}
