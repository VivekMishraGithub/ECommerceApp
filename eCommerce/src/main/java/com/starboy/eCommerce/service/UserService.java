package com.starboy.eCommerce.service;

import com.starboy.eCommerce.JwtUtil;
import com.starboy.eCommerce.dto.UserDTO;
import com.starboy.eCommerce.model.User;
import com.starboy.eCommerce.repository.UserRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @Autowired
    private JwtUtil jwtUtil;

    public String register(@NotNull UserDTO userDTO) {
        if (userRepository.findByUsername(userDTO.getUsername()).isPresent()) {
            throw new RuntimeException("Username already exists");
        }
        User user = new User();
        user.setUsername(userDTO.getUsername());
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        user.setEmail(userDTO.getEmail());
        user.setFullName(userDTO.getFullName());
        userRepository.save(user);
        return "User registered successfully";
    }

    public boolean login(@NotNull UserDTO userDTO) {
        return userRepository.findByUsername(userDTO.getUsername())
                .map(user -> passwordEncoder.matches(userDTO.getPassword(), user.getPassword()))
                .orElse(false);
    }
}