import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ArticleRoutingModule } from './article-routing.module';

import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { DefaultImagePipe } from '../model/default-image/default-image.pipe';


@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleNewReactiveComponent,
    ArticleDetailComponent,
    ArticleItemComponent,
    DefaultImagePipe
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    ReactiveFormsModule
  ]
})
export class ArticleModule { }
