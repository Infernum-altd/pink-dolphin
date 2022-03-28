package com.altynnikov.pink.dolphin.services.impl;

import com.altynnikov.pink.dolphin.models.Article;
import com.altynnikov.pink.dolphin.models.Paginator;
import com.altynnikov.pink.dolphin.repository.ArticleRepository;
import com.altynnikov.pink.dolphin.services.ArticleService;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class ArticleServiceImpl implements ArticleService {

    private static final String IMG_TEG_REGEX = "img.+?(?=>)";

    private static final String SRC_PARAMETER_REGEX = "\"d.+?(?=\")";

    private static final Pattern IMAGE_TEG_PATTERN = Pattern.compile(IMG_TEG_REGEX);

    private static final Pattern SRC_PARAMETER_PATTERN = Pattern.compile(SRC_PARAMETER_REGEX);

    @Resource
    private ArticleRepository articleRepository;

    @Resource
    private ImageUploaderServiceImpl imageUploaderService;

    @Override
    public List<Article> getArticlesByCategoryId(String id, Paginator paginator) {
        Pageable page = PageRequest.of(paginator.getPageNumber(), paginator.getElementsPerPage());
        return articleRepository.findByCategoryId(Long.valueOf(id), page);
    }

    @Override
    public void publishArticle(Article article) throws IOException {
        publishPreviewImage(article);
        publishImages(article);
        articleRepository.save(article);
    }

    private void publishPreviewImage(Article article) throws IOException {
        String base64ImagesWithPrefix = getImageTagsFromArticleContent(article.getImgPreview()).get(0);

        String base64Image = getSrcParameterFromTag(base64ImagesWithPrefix);
        String fileExtension = getFileExtensionFromBase64(base64Image);
        String newImageUrl = imageUploaderService.uploadImage(base64Image, fileExtension);
        article.setImgPreview(article.getImgPreview().replace(base64ImagesWithPrefix, newImageUrl));
    }
    private void publishImages(Article article) throws IOException {
        List<String> base64ImagesWithPrefix = getImageTagsFromArticleContent(article.getArticleContent());
        for (String imageTag : base64ImagesWithPrefix) {
            String base64Image = getSrcParameterFromTag(imageTag);
            String fileExtension = getFileExtensionFromBase64(base64Image);
            String newImageUrl = imageUploaderService.uploadImage(base64Image, fileExtension);
            article.setArticleContent(article.getArticleContent().replace(imageTag, newImageUrl)); //
        }
    }

    private List<String> getImageTagsFromArticleContent(String articleContent) {
        Matcher matcher = IMAGE_TEG_PATTERN.matcher(articleContent);
        List<String> imgTags = new ArrayList<>();
        while (matcher.find()) {
            imgTags.add(matcher.group());
        }

        return imgTags;
    }

    private String getSrcParameterFromTag(String imgTag) {
        Matcher matcher = SRC_PARAMETER_PATTERN.matcher(imgTag);
        matcher.find();
        String scrContent = matcher.group();

        return scrContent.split(",")[1];
    }

    private String getFileExtensionFromBase64(String imageBase64) throws IOException {
        byte[] imageByteArray = Base64.getDecoder().decode(imageBase64);

        InputStream is = new ByteArrayInputStream(imageByteArray);

        //Find out image type
        String mimeType = null;

        mimeType = URLConnection.guessContentTypeFromStream(is); //mimeType is something like "image/jpeg"
        String delimiter = "[/]";
        String[] tokens = mimeType.split(delimiter);
        return tokens[1];
    }
}
