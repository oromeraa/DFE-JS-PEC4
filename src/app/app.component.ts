import { Component } from '@angular/core';
import { UserStoreService } from './services/user-store/user-store.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';
  currentSection: string = 'login';

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

  logout() {
    this.userStoreService.logout();
  }
}
