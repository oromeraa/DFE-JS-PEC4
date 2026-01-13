import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArticleItemComponent } from './articles/article-item/article-item.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleNewTemplateComponent } from './articles/article-new-template/article-new-template.component';
import { ArticleNewReactiveComponent } from './articles/article-new-reactive/article-new-reactive.component';

import { DefaultImagePipe } from './model/default-image/default-image.pipe';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { UserService } from './services/user/user.service';
import { UserStoreService } from './services/user-store/user-store.service';
import { articleAppInterceptor } from './services/article-app/article-app.interceptor';
import { AppRoutesModule } from './app-routes.module';

@NgModule({
  declarations: [
    AppComponent,
    ArticleItemComponent,
    ArticleListComponent,
    NavbarComponent,
    ArticleNewTemplateComponent,
    ArticleNewReactiveComponent,
    DefaultImagePipe,
    LoginComponent,
    RegisterComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutesModule
  ],
  providers: [UserService,
    UserStoreService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: articleAppInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
