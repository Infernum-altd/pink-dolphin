import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../models/article";

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent implements OnInit {
  @Input() article: Article | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
