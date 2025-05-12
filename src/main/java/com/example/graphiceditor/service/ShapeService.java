package com.example.graphiceditor.service;

import com.example.graphiceditor.model.Shape;
import com.example.graphiceditor.repository.ShapeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShapeService {

    private final ShapeRepository repository;

    public ShapeService(ShapeRepository repository) {
        this.repository = repository;
    }

    public List<Shape> getAllShapes() {
        return repository.findAll();
    }

    public Shape saveShape(Shape shape) {
        return repository.save(shape);
    }
}
