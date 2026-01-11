import { Component } from '@angular/core';
import { Article, ArticleQuantityChange } from '../model/article';

@Component({
    selector: 'app-article-list',
    template: `
        <div class="list-container">
            <h2>Lista de productos</h2>            
            <div class="articles-grid">
                <app-article-item
                *ngFor="let article of articles"
                [article]="article"
                (quantityChange)="onQuantityChange($event)">
                </app-article-item>
            </div>
        </div>
    `,
    styles: `
        .articles-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            padding: 20px;
            justify-content: center;
        }
        h2 { text-align: center; }
    `
})


export class ArticleListComponent {
    // Creamos una lista de productos de ejemplo
    articles: Article[] = [
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

    onQuantityChange(event: ArticleQuantityChange): void {
        const articleToUpdate = this.articles.find(a => a.id === event.article.id);
        
        if (articleToUpdate) {
        const newQuantity = articleToUpdate.quantityInCart + event.changeInQuantity;
        // Controla que no baje de 0
        if (newQuantity >= 0) {
            articleToUpdate.quantityInCart = newQuantity;
        }
        }
    }
}