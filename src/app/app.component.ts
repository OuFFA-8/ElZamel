import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { initFlowbite } from 'flowbite';
import { FlowbiteService } from './core/services/flowbite/flowbite.service';
import { NavbarComponent } from "./layouts/navbar/navbar.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'elzamel';
  private localStorageKey = 'preferred_lang'; 

  constructor(
    private flowbiteService: FlowbiteService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem(this.localStorageKey); 
      const currentLang = savedLang || 'ar';

      if (currentLang === 'ar') {
        this.document.documentElement.lang = 'ar';
        this.document.documentElement.dir = 'rtl';
      } else {
        this.document.documentElement.lang = currentLang;
        this.document.documentElement.dir = 'ltr';
      }

      this.flowbiteService.loadFlowbite((flowbite) => {
        initFlowbite();
      });

      // Scroll to top on initial page load
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }, 0);

      // Scroll to top on every route change
      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe(() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        });
    }
  }
}
