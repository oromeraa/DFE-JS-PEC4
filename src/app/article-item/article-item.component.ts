import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Article, ArticleQuantityChange } from '../model/article';

@Component({
    selector: 'app-article-item',
    templateUrl: './article-item.component.html',
    styleUrls: ['./article-item.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleItemComponent {
    @Input() article!: Article;
    @Output() quantityChange = new EventEmitter<ArticleQuantityChange>();

    // Ahora los datos se modifican a través de eventos de manera externa
    increaseQuantity(): void {
        this.quantityChange.emit({ article: this.article, changeInQuantity: 1 });
    }
    decreaseQuantity(): void {
        this.quantityChange.emit({ article: this.article, changeInQuantity: -1 });
    }
    
    // Boton para alternar el estado de oferta (DEBUG)
    // toggleOnSale(): void {
    //     this.article.isOnSale = !this.article.isOnSale;
    // }
    // Ahora los datos se modifican a través de eventos de manera externa
}