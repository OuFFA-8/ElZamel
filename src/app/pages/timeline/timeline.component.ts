import { Component, OnInit, Renderer2 } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface Section {
  id: number;
  navTitle: string;
  navNumber: string;
  contentTitle: string;
  contentText: string;
  imageUrl: string;
}

@Component({
  selector: 'app-timeline',
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent  implements OnInit {

  sections: Section[] = [
    { id: 1, navTitle: 'التجاري', navNumber: '2013', contentTitle: 'الشركات والتجاري', contentText: 'يقدم LFSH الدعم القانوني...', imageUrl: '/images/black-white-view-theatre.jpg' },
    { id: 2, navTitle: 'المصرفي', navNumber: '2015', contentTitle: 'الأعمال المصرفية', contentText: 'تفاصيل حول الخدمات...', imageUrl: '/images/black-white-view-theatre.jpg' },
    { id: 3, navTitle: 'التأمين', navNumber: '2200', contentTitle: 'قانون التأمين', contentText: 'نقدم استشارات شاملة...', imageUrl: '/images/black-white-view-theatre.jpg' },
    { id: 4, navTitle: 'الاستثمار', navNumber: '2004', contentTitle: 'الاستثمار', contentText: 'دعم قانوني لفرص...', imageUrl: '/images/black-white-view-theatre.jpg' }
  ];

  selectedSection: Section | null = null;
  ngOnInit(): void {
    if (this.sections.length > 0) {
      this.selectedSection = this.sections[0];
    }
  }

  selectSection(section: Section): void {
    this.selectedSection = section;
  }

}
