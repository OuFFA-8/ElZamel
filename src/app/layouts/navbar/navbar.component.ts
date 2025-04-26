import { Component, HostListener, inject, signal } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { MyTranslateService } from '../../core/services/myTranslate/my-translate.service';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [TranslatePipe, CommonModule],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  private readonly myTranslateService = inject(MyTranslateService)
  readonly translateService = inject(TranslateService)



  change(lang: string): void {
    this.myTranslateService.changeLangTranslate(lang);
  }

  currentLang(lang: string): boolean {
    return this.translateService.currentLang === lang;
  }


  scroll: boolean = false;

  @HostListener('window:scroll',) onscroll() {

    if (scrollY > 0) {
      this.scroll = true;
    }
    else {
      this.scroll = false;
    } 
  }



}
