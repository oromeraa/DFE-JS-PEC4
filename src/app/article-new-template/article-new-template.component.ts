import { Component } from '@angular/core';

@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrls: ['./article-new-template.component.css']
})
export class ArticleNewTemplateComponent {

  constructor() {
    // no debemos crear Article, solo manejar el formulario
  }
  
  createArticle(articleForm: any) {
    if (articleForm.valid) {
      console.log('Artículo nuevo:', articleForm.value.article);
    } else {
      console.error('El formulario contiene errores');
    }
  }
}
