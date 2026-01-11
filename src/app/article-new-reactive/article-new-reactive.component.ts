import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms'; 
import { ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrl: './article-new-reactive.component.css'
})
export class ArticleNewReactiveComponent {

  public articleForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.createForm();
  }

  createForm() {
    this.articleForm = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('^[!a-zA-Z0-9]+$'),
        nameArticleValidator
      ]),
      price: new FormControl('', [
        Validators.required,
        Validators.min(0.1)
      ]),
      imageUrl: new FormControl('', [
        Validators.required,
        Validators.pattern('^https?:\/\/(www\.)?[a-zA-Z0-9\\-]+\\.[a-zA-Z]{2,3}(\/[a-zA-Z0-9\\-]+(\\.[a-zA-Z]+)?)*$')
      ]),
      onSale: new FormControl(false)
      }
    );
  }

  // No he encontrado otra forma de hacer el submitted
  public submitted = false;

  createArticle() {
    this.submitted = true;
    if (this.articleForm.valid) {
      console.log('Artículo nuevo:', this.articleForm.value);
    } else {
      console.error('El formulario contiene errores');
    }
  }
}

function nameArticleValidator(articleNAme: AbstractControl) {
  const noValidNames = ["Prueba", "Test", "Mock", "Fake"];
  if (noValidNames.includes(articleNAme.value)) {
    return { nonAllowedName: true };
  }
  return null;
}