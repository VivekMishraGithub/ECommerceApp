package com.starboy.eCommerce.service;

import com.starboy.eCommerce.dto.CategoryDTO;
import com.starboy.eCommerce.dto.SubcategoryDTO;
import com.starboy.eCommerce.model.Category;
import com.starboy.eCommerce.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepo;

    @Transactional(readOnly = true)
    public List<CategoryDTO> getAllCategories() {
        return categoryRepo.findAll().stream().map(this::toDTO).collect(Collectors.toList());
    }

    private CategoryDTO toDTO(Category category) {
        CategoryDTO dto = new CategoryDTO();
        dto.setId(category.getId());
        dto.setName(category.getName());
        dto.setSubcategories(
                category.getSubcategories().stream()
                        .map(sub -> new SubcategoryDTO(sub.getId(), sub.getName()))
                        .collect(Collectors.toList())
        );
        return dto;
    }
}
