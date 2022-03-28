import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PublishDialogComponent} from "./publis-dialog/publish-dialog.component";
import {Article} from "../../models/article";
import {ArticleService} from "../../services/article.service";

@Component({
  selector: 'app-article-creator',
  templateUrl: './article-creator.component.html',
  styleUrls: ['./article-creator.component.css']
})
export class ArticleCreatorComponent implements OnInit {

  article: Article = {
    articleContent: '',
    id: -1,
    introduction: '',
    title: '',
    categoryId: -1,
    imgPreview: ''
  };


  constructor(public dialog: MatDialog,
              private articleService: ArticleService) {
  }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(PublishDialogComponent, {width: '250px'});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.article.categoryId = result.selectedCategory.id;
        this.article.imgPreview = result.previewImage;
        this.publish();
      }
    });
  }

  publish() {
    this.articleService.postArticle(this.article).subscribe();
  }

  updateArticleContent(articleContent: string) {
    this.article.articleContent = articleContent;
  }
}

