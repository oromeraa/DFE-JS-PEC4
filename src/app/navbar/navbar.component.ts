import { Component } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  constructor(private userService: UserService) { }

  isLogged(): boolean {
    return this.userService.isLogged();
  }

  logout() {
    this.userService.logout();
  }
}
