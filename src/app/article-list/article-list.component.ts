import { Component } from '@angular/core';
import { Article, ArticleQuantityChange } from '../model/article';
import { Observable } from 'rxjs';
import { ArticleServiceService } from '../article-service/article-service.service';

@Component({
    selector: 'app-article-list',
    template: `
        <div class="list-container">
            <h2>Lista de productos</h2>            
            <div class="articles-grid">
                <app-article-item
                *ngFor="let article of (articles$ | async)"
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
    public articles$ = this.articleService.getArticles();

    constructor(private articleService: ArticleServiceService) { }

    onQuantityChange(event: ArticleQuantityChange): void {
        this.articleService.changeQuantity(event.article.id, event.changeInQuantity).subscribe();
    }

}