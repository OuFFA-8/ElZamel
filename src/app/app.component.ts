// src/app/app.component.ts

import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet, NavigationStart, NavigationCancel, NavigationError, Event as RouterEvent } from '@angular/router'; // <<< تم تعديل هذا السطر
import { filter, tap } from 'rxjs/operators'; // <<< تم تعديل هذا السطر (أضفنا tap إذا أردت استخدامه للتجربة)
import { initFlowbite } from 'flowbite';
import { FlowbiteService } from './core/services/flowbite/flowbite.service';
import { NavbarComponent } from "./layouts/navbar/navbar.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { DOCUMENT, CommonModule, isPlatformBrowser } from '@angular/common'; // <<< تم تعديل هذا السطر (أضفنا CommonModule)
import { Observable } from 'rxjs'; // <<< سطر جديد
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component'; // <<< سطر جديد
import { LoadingService } from './core/services/loading/loading.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    LoadingSpinnerComponent
  ],
  templateUrl: './app.component.html', // سنحتاج لتعديل هذا الملف أيضًا
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'elzamel';
  private localStorageKey = 'preferred_lang';

  isLoading$: Observable<boolean>;

  constructor(
    private flowbiteService: FlowbiteService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document,
    private loadingService: LoadingService
  ) {
    // --- ربط isLoading$ ---
    this.isLoading$ = this.loadingService.loading$; // <<< سطر جديد
    // --- نهاية ربط isLoading$ ---
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // ... (كود اللغة و Flowbite يبقى كما هو) ...
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

      window.addEventListener('load', () => {
        setTimeout(() => this.loadingService.hide(), 1000); // ممكن تعدل التأخير حسب الحركة
      });

      // --- منطق شاشة التحميل مع scrollToTop ---
      this.router.events
        .pipe(
          filter((event: RouterEvent): event is NavigationStart | NavigationEnd | NavigationCancel | NavigationError =>
            event instanceof NavigationStart ||
            event instanceof NavigationEnd ||
            event instanceof NavigationCancel ||
            event instanceof NavigationError
          ),
          tap(event => console.log('Router Event:', event)) // للتجربة
        )
        .subscribe((event: RouterEvent) => {
          if (event instanceof NavigationStart) {
            console.log('Showing loader due to NavigationStart'); // <<< أضف هذا السطر
            this.loadingService.show(); // أظهر اللودر
            // لا يوجد scrollToTop هنا لأننا نريد أن يحدث بعد اكتمال التحميل
            return;
          }

          if (event instanceof NavigationEnd) {
            // Scroll to top on successful navigation end
            console.log('Hiding loader due to NavigationEnd'); // <<< أضف هذا السطر

            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            // اخف اللودر بعد تأخير بسيط
            setTimeout(() => this.loadingService.hide(), 1000);
          } else if (event instanceof NavigationCancel || event instanceof NavigationError) {
            // في حالة الإلغاء أو الخطأ، اخف اللودر أيضًا
            console.log('Hiding loader due to NavigationCancel/Error'); // <<< أضف هذا السطر

            setTimeout(() => this.loadingService.hide(), 1000);
          }
        });

      // Scroll to top on initial page load (إذا لم يكن هناك NavigationStart أول)
      // يمكنك إبقاء هذا إذا أردت، أو الاعتماد على NavigationEnd الأول
      // إذا كان لديك مسار افتراضي يتم تحميله، NavigationEnd سيهتم بذلك
      setTimeout(() => {
        if (!(this.router.navigated && this.router.url === '/')) { // تحقق إذا لم يتم التنقل بالفعل
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
      }, 0);
      // --- نهاية منطق شاشة التحميل مع scrollToTop ---
    }
  }
}