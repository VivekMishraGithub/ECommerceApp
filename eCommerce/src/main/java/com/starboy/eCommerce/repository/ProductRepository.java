package com.starboy.eCommerce.repository;

import com.starboy.eCommerce.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findBySubcategoryId(Long subcategoryId);
}
