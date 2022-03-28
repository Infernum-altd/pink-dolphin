package com.altynnikov.pink.dolphin.services;

import com.altynnikov.pink.dolphin.models.Article;
import com.altynnikov.pink.dolphin.models.Paginator;

import java.io.IOException;
import java.util.List;

public interface ArticleService {
    List<Article> getArticlesByCategoryId(String id, Paginator paginator);

    void publishArticle(Article article) throws IOException;
}
