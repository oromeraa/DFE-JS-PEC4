import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../../model/article';
import { ArticleServiceService } from '../../services/article-service/article-service.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.css'
})
export class ArticleDetailComponent {

  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleServiceService
  ) { }

  private articleId: string | null = this.activatedRoute.snapshot.paramMap.get('id');

  public article$: Observable<Article> | null = this.articleId ? this.articleService.getArticleById(this.articleId) : null;
}
