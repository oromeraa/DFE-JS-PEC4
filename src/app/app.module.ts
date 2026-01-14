import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { DefaultImagePipe } from './model/default-image/default-image.pipe';
import { UserService } from './services/user/user.service';
import { UserStoreService } from './services/user-store/user-store.service';
import { articleAppInterceptor } from './services/article-app/article-app.interceptor';
import { AppRoutesModule } from './app-routes.module';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DefaultImagePipe
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
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
