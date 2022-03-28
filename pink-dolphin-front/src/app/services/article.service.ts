import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Article} from "../models/article";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private BASE_URL = environment.apiBaseUrl;
  private POST_ARTICLE = this.BASE_URL + 'article/publish';

  constructor(private http: HttpClient) { }

  postArticle(article: Article): Observable<any> {
    return this.http.post(this.POST_ARTICLE, article);
  }
}
