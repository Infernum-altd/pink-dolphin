package com.altynnikov.pink.dolphin.models;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Data
@Entity
public class Article {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    private String title;

    private String articleContent;

    private Long categoryId;

    private String introduction;

    private String imgPreview;

    private Date creationDate;
}
