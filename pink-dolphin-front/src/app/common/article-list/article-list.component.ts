import {Component, Input, OnInit} from '@angular/core';
import {of} from "rxjs";
import {ARTICLES} from "../../mock";
import {Article} from "../../models/article";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  @Input() categoryId: number | undefined;

  articles: Article[] | undefined;

  constructor() {
  }

  ngOnInit(): void {
    of(ARTICLES).subscribe(articles => this.articles = articles);
  }

}
