package com.altynnikov.pink.dolphin.repository;

import com.altynnikov.pink.dolphin.models.Article;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ArticleRepository extends CrudRepository<Article, Long> {
    List<Article> findByCategoryId(Long categoryId, Pageable pageable);
}