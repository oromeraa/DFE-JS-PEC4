import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  @Output() toSection = new EventEmitter<string>();

  goToSection(section: string): void {
    this.toSection.emit(section);
  }
}
