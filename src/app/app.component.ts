import { Component } from '@angular/core';


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
}
