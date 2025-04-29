import { Component, HostListener, inject, signal, computed, DestroyRef, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common'; // <-- isPlatformBrowser هنا
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { MyTranslateService } from '../../core/services/myTranslate/my-translate.service';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-navbar',
  imports: [TranslatePipe, CommonModule, RouterLink, RouterLinkActive], // تأكد CommonModule موجود
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  private readonly myTranslateService = inject(MyTranslateService);
  readonly translateService = inject(TranslateService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly platformId = inject(PLATFORM_ID); // <-- حقن الـ Platform ID

  change(lang: string): void {
    this.myTranslateService.changeLangTranslate(lang);
  }

  currentLang(lang: string): boolean {
    return this.translateService.currentLang === lang;
  }

  readonly isScrolled = signal(false);
  readonly isHomePage = signal(this.checkIsHome(this.router.url));
  readonly showBackground = computed(() => !this.isHomePage() || this.isScrolled());

  constructor() {
    // مراقبة الراوتر مش محتاجة isPlatformBrowser لأنها بتشتغل عادي على السيرفر
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(event => this.checkIsHome(event.urlAfterRedirects)),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(isHome => {
      this.isHomePage.set(isHome);
    });

    // استدعاء handleScroll الأولي فقط في المتصفح
    if (isPlatformBrowser(this.platformId)) {
        this.handleScroll();
    }
  }

  private checkIsHome(url: string): boolean {
    // ****** عدّل الشرط ده ليناسب الـ URL بتاع الهوم بيدج عندك ******
    return url === '/' || url === '/home';
  }

  // الـ HostListener هيشتغل بس في المتصفح بطبيعته، بس بنحط الشرط جوا onScroll كمان للأمان
  @HostListener('window:scroll')
  onScroll(): void {
     if (isPlatformBrowser(this.platformId)) { // <-- التحقق هنا مهم
       this.handleScroll();
     }
  }

  // دالة handleScroll نفسها لازم تتأكد برضه إنها في المتصفح
  private handleScroll(): void {
     if (isPlatformBrowser(this.platformId)) { // <-- التحقق هنا أساسي
        const scrolled = window.scrollY > 200;
        if (this.isScrolled() !== scrolled) {
          this.isScrolled.set(scrolled);
        }
     }
  }
}