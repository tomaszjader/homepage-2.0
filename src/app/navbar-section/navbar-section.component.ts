import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-section',
  templateUrl: './navbar-section.component.html',
  styleUrls: ['./navbar-section.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule]
})
export class NavbarSectionComponent {
  isMenuOpen = false;
  currentLang = 'pl';

  constructor(public translate: TranslateService) {
    translate.addLangs(['pl', 'en']);
    translate.setDefaultLang('pl');
    const browserLang = translate.getBrowserLang();
    this.currentLang = browserLang?.match(/en|pl/) ? browserLang : 'pl';
    translate.use(this.currentLang);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    this.closeMenu();
  }
}
