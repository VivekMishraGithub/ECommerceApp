package com.starboy.eCommerce.controller;

import com.starboy.eCommerce.model.Product;
import com.starboy.eCommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping
    public Product saveProduct(@RequestBody Product product) {
        return productService.saveProduct(product);
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/{id}")
    public Optional<Product> getProductById(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    @GetMapping("/subcategory/{subcategoryId}")
    public List<Product> getProductsBySubcategoryId(@PathVariable Long subcategoryId) {
        return productService.getProductsBySubcategoryId(subcategoryId);
    }

}
