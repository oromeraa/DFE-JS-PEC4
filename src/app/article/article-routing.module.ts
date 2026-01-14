import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: 'article-item', component: ArticleItemComponent },
  { path: 'article-detail', component: ArticleDetailComponent },
  { path: 'article-list', component: ArticleListComponent },
  { path: 'article-new-reactive', component: ArticleNewReactiveComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
