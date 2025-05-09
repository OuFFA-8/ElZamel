import { AfterViewInit, Component, computed, ElementRef, HostListener, NgModule, signal } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";
import { CommonModule } from '@angular/common';
import { TimelineComponent } from "../timeline/timeline.component";
import { TranslatePipe } from '@ngx-translate/core';
import { NavbarComponent } from "../../layouts/navbar/navbar.component";
import { RouterLink } from '@angular/router';

interface Logo {
  id: number;
  src: string;
  alt: string; // إضافة وصف بديل للوجو لتحسين إمكانية الوصول
}


@Component({
  selector: 'app-home',
  imports: [CarouselComponent, CommonModule, TimelineComponent, TranslatePipe, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})



export class HomeComponent implements AfterViewInit {




  open1 = false;
  open2 = false;
  open3 = false;
  open4 = false;
  open5 = false;
  open6 = false;
  open7 = false;

  toggleOpen1() {
    this.open1 = !this.open1;
  }
  toggleOpen2() {
    this.open2 = !this.open2;
  }
  toggleOpen3() {
    this.open3 = !this.open3;
  }
  toggleOpen4() {
    this.open4 = !this.open4;
  }
  toggleOpen5() {
    this.open5 = !this.open5;
  }
  toggleOpen6() {
    this.open6 = !this.open6;
  }
  toggleOpen7() {
    this.open7 = !this.open7;
  }

  counter1 = 0;
  counter2 = 0;
  counter3 = 0;
  private hasAnimated = false;


  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      const counterSection = document.querySelector('#counterSection');

      if (!counterSection) return;

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.startCounter();
            this.hasAnimated = true;
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });

      observer.observe(counterSection);
    }
  }

  startCounter() {
    this.animateValue('counter1', 320, 2000);
    this.animateValue('counter2', 320, 2000);
    this.animateValue('counter3', 320, 2000);
  }

  animateValue(counterName: 'counter1' | 'counter2' | 'counter3', end: number, duration: number) {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start++;
      (this as any)[counterName] = start;
      if (start >= end) {
        clearInterval(timer);
      }
    }, stepTime);
  }



  readonly logos = signal<Logo[]>([
    { id: 1, src: '/images/logo-1.png', alt: 'شعار 1' },
    { id: 2, src: '/images/logo-2.png', alt: 'شعار 2' },
    { id: 3, src: '/images/logo-3.png', alt: 'شعار 3' },
    { id: 4, src: '/images/logo-4.png', alt: 'شعار 4' }
  ]);

  readonly duplicatedLogos = computed(() => {
    const currentLogos = this.logos();
    if (!Array.isArray(currentLogos) || currentLogos.length === 0) {
      return []; 
    }
    return [...currentLogos, ...currentLogos];
  });

  readonly logoCount = computed(() => this.logos().length);

  readonly animationDuration = computed(() => `${(this.logos()?.length || 10) * 6}s`);
}
