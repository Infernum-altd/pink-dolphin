package com.altynnikov.pink.dolphin.services.impl;

import com.altynnikov.pink.dolphin.models.Category;
import com.altynnikov.pink.dolphin.repository.CategoryRepository;
import com.altynnikov.pink.dolphin.services.CategoryService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Resource
    private CategoryRepository categoryRepository;

    @Override
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }
}
