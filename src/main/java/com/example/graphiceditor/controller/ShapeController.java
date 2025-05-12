package com.example.graphiceditor.controller;

import com.example.graphiceditor.model.Shape;
import com.example.graphiceditor.service.ShapeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/shapes")
@CrossOrigin(origins = "*")
public class ShapeController {

    private final ShapeService service;

    public ShapeController(ShapeService service) {
        this.service = service;
    }

    @GetMapping
    public List<Shape> getAll() {
        return service.getAllShapes();
    }

    @PostMapping
    public Shape create(@RequestBody Shape shape) {
        return service.saveShape(shape);
    }
}
