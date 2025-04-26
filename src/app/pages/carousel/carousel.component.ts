import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { dir } from 'console';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarouselComponent {
  swiperEl: HTMLElement | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.swiperEl = document.querySelector('swiper-container');

      if (this.swiperEl) {
        const params = {
          dir: 'rtl',
          injectStyles: [`
            .swiper-pagination {
              bottom: 10px !important;
              right: 10px !important;
              left: auto !important;
              text-align: right !important;
            }

            .swiper-pagination-bullet {
              width: 25px;
              height: 25px;
              text-align: center;
              line-height: 20px;
              font-size: 12px;
              color: #000;
              opacity: 1;
              background: rgba(0, 0, 0, 0.2);
            }

            .swiper-pagination-bullet-active {
              color: #fff;
              background: #a39669;
            }
          `],
          pagination: {
            clickable: true,
            renderBullet: (index: number, className: string): string => {
              return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
          },
          autoplay: {
            delay: 3000, 
            disableOnInteraction: false, 
          },
          loop: true,
          
        };
        Object.assign(this.swiperEl, params);
        (this.swiperEl as any).initialize();
      }
    }
  }
}
