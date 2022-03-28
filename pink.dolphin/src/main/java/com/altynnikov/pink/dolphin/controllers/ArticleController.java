package com.altynnikov.pink.dolphin.controllers;

import com.altynnikov.pink.dolphin.models.Article;
import com.altynnikov.pink.dolphin.models.Paginator;
import com.altynnikov.pink.dolphin.services.ArticleService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/article")
public class ArticleController {
    @Resource
    private ArticleService articleService;

    @GetMapping("/category/{categoryId}")
    public List<Article> getArticlesByCategoryId(@PathVariable String categoryId, @RequestParam Paginator paginator) {
        return articleService.getArticlesByCategoryId(categoryId, paginator);
    }

    @PostMapping("/publish")
    public HttpStatus publishArticle(@RequestBody Article article) throws IOException {
        articleService.publishArticle(article);

        return HttpStatus.OK;
    }
}
