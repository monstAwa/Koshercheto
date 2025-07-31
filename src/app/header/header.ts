import { Component, Output, EventEmitter } from '@angular/core'; 

@Component({
  standalone: true, 
  selector: 'app-header',
  imports: [], 
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