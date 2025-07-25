import { Component, Output, EventEmitter } from '@angular/core'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  @Output() sectionSelected = new EventEmitter<string>();

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }


  navigateToSection(sectionId: string) {
    this.sectionSelected.emit(sectionId); 
    this.closeMenu(); 
  }
}