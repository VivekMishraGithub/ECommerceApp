package com.starboy.eCommerce.model;

import jakarta.persistence.*;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private double price;
    private String imageUrl;

    @ManyToOne
    @JoinColumn(name = "subcategory_id")
    private Subcategory subcategory;

    public Long getProductId() { return id; }
    public void setProductId(Long id) { this.id = id; }

    public String getProductName() { return name; }
    public void setProductName(String name) { this.name = name; }

    public String getProductDesc() { return description; }
    public void setProductDesc(String description) { this.description = description; }

    public double getProductPrice() { return price; }
    public void setProductPrice(double price) { this.price = price; }

    public String getProductImgUrl() { return imageUrl; }
    public void setProductImgUrl(String imageUrl) { this.imageUrl = imageUrl; }

}
