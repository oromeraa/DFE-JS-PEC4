import { Component } from '@angular/core';
import { UserStoreService } from './user-store/user-store.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';
  currentSection: string = 'home';

  goToSection(section: string): void {
    this.currentSection = section;
  }

  userStoreService: UserStoreService;

  constructor(userStoreService: UserStoreService) {
    this.userStoreService = userStoreService;
  }

  isLoggedIn(): boolean {
    return this.userStoreService.isLogged();
  }
}
