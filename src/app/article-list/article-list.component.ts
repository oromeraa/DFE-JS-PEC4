import { Component } from '@angular/core';
import { Article, ArticleQuantityChange } from '../model/article';
import { Observable, Subject } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { ArticleServiceService } from '../article-service/article-service.service';

@Component({
    selector: 'app-article-list',
    template: `
        <div class="list-container" style="align-items: center">
            <h2>Lista de productos</h2>     
            
            <div style="text-align: center; margin-bottom: 20px;">
                <input type="text" #searchBox placeholder="Filtrar por nombre..." (input)="onLiveSearch($event)">
            </div>
            
            <div class="articles-grid">
                <app-article-item
                *ngFor="let article of (articlesLiveSearch$ | async)"
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

    private liveSearchSubject = new Subject<string>();

    private lastSearchSubject: string = '';

    public articlesLiveSearch$ = this.liveSearchSubject.pipe(
        startWith(''),
        switchMap(name => {
            this.lastSearchSubject = name;
            return this.articleService.getArticlesByName(name);
        })
    );

    // public articles$ = this.articleService.getArticles();

    constructor(private articleService: ArticleServiceService) { }

    onQuantityChange(event: ArticleQuantityChange): void {
        this.articleService.changeQuantity(event.article.id, event.changeInQuantity).subscribe({
            // así actualizamos en valor del carro con el valor real alojado en el servidor
            next: () => {
                this.liveSearchSubject.next(this.lastSearchSubject);
            }
        });
    }

    // onSearch(name: string): void {
    //     this.articles$ = this.articleService.getArticlesByName(name);
    // }

    onLiveSearch(event: any): void {
        this.liveSearchSubject.next(event.target.value);
    }
}