package com.example.graphiceditor.model;

import jakarta.persistence.*;

@Entity
public class Shape {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String type; // "circle", "rectangle", etc.
    private double x;
    private double y;
    private double width;
    private double height;
    private double rotation;
    private String color;

    // геттери і сеттери
}
