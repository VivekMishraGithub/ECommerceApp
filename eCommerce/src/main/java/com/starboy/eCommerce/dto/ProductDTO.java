package com.starboy.eCommerce.dto;

public class ProductDTO {
    private Long id;
    private String name;
    private String description;
    private double price;
    private String imageUrl;

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
