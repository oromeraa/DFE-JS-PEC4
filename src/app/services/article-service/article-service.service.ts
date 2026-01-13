import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../model/article';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  private apiArticles = 'http://localhost:3000/api/articles';

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiArticles);
  }

  getArticlesByName(name: string): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.apiArticles}?q=${name}`);
  }

  getArticleById(articleID: string): Observable<Article> {
    return this.http.get<Article>(`${this.apiArticles}/${articleID}`);
  }

  changeQuantity(articleID: number, changeInQuantity: number): Observable<any> {
    const patchProperty = { changeInQuantity: changeInQuantity };
    return this.http.patch(`${this.apiArticles}/${articleID}`, patchProperty);
  }

  create(article: Article): Observable<any> {
    return this.http.post(this.apiArticles, article);
  }
}
