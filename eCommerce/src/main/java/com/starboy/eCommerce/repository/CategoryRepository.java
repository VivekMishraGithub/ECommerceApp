package com.starboy.eCommerce.repository;

import com.starboy.eCommerce.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
