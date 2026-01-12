import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../model/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  // lista ejemplo del article-list.component.ts
  private articles: Article[] = [
        {
        id: 1,
        name: 'Uno No Mercy',
        imageUrl: 'https://images.mattel.net/image/upload/w_180,h_180,f_auto,c_pad/shop-emea-prod/products/jhypq16aafd0yqm1coyv_82ba9a3f-3be0-4b24-bd58-339571dab4b2.png',
        price: 10.00,
        isOnSale: true,
        quantityInCart: 0
        },
        {
        id: 2,
        name: 'Uno Deluxe',
        imageUrl: 'https://images.mattel.net/image/upload/w_180,h_180,f_auto,c_pad/shop-emea-prod/products/n7yy0nxiudxrg2cn5dik_492ff921-c6e2-4b51-af6e-9708d648fc1a.jpg',
        price: 19.49,
        isOnSale: true,
        quantityInCart: 0
        },
        {
        id: 3,
        name: 'Pictionary en castellano',
        imageUrl: 'https://images.mattel.net/image/upload/w_180,h_180,f_auto,c_pad/shop-emea-prod/products/uckk0dzqrvypwc88kvd4_51c2d6d3-344f-45f9-9dfd-5cb92f717ecb.jpg',
        price: 25.00,
        isOnSale: false,
        quantityInCart: 0
        }
    ];

  constructor() { }

  getArticles(): Observable<Article[]> {
    return of(this.articles);
  }

  changeQuantity(articleID: number, changeInQuantity: number): Observable<Article | undefined> {
    const article = this.articles.find(a => a.id === articleID);
    if (article) {
      const newQuantity = article.quantityInCart + changeInQuantity;
      if (newQuantity >= 0) {
        article.quantityInCart = newQuantity;
      }
    }
    return of(article);
  }

  create(article: Article): Observable<any> {
    this.articles.push(article);
    return of(article);
  }
}
