import { Component, Output, EventEmitter } from '@angular/core'; // Добавете Output и EventEmitter
import { CommonModule } from '@angular/common'; // Уверете се, че CommonModule е импортиран, ако е необходимо за *ngIf/ngClass и т.н.

@Component({
  selector: 'app-header',
  standalone: true, // Уверете се, че е standalone компонент
  imports: [CommonModule], // Добавете CommonModule
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  @Output() sectionSelected = new EventEmitter<string>(); // Ново Output събитие

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  // Нов метод, който излъчва ID на секцията и затваря менюто
  navigateToSection(sectionId: string) {
    this.sectionSelected.emit(sectionId); // Излъчва ID на секцията
    this.closeMenu(); // Затваря менюто след навигация
  }
}