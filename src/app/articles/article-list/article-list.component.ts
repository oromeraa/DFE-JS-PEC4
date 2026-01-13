import { Component } from '@angular/core';
import { Article, ArticleQuantityChange } from '../../model/article';
import { Observable, Subject } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { ArticleServiceService } from '../../services/article-service/article-service.service';

@Component({
    selector: 'app-article-list',
    templateUrl: './article-list.component.html',
    styleUrl: './article-list.component.css'
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