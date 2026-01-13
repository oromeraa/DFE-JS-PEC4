import { Component } from '@angular/core';
import { UserStoreService } from '../services/user-store/user-store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  constructor(private userStore: UserStoreService) { }

  isLogged(): boolean {
    return this.userStore.isLogged();
  }

  logout() {
    this.userStore.logout();
  }
}
