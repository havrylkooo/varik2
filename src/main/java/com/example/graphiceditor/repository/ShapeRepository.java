package com.example.graphiceditor.repository;

import com.example.graphiceditor.model.Shape;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShapeRepository extends JpaRepository<Shape, Long> {
}
