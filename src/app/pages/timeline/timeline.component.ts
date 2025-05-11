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
  imports: [TranslatePipe],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent implements OnInit {

  sections: Section[] = [
    { id: 1, navTitle: 'timeline.title1', navNumber: '2013', contentTitle: 'timeline.firm', contentText: 'timeline.paragraph', imageUrl: '/images/pexels-sora-shimazaki-5668484.jpg' },
    { id: 2, navTitle: 'timeline.title2', navNumber: '2015', contentTitle: 'timeline.firm', contentText: 'timeline.paragraph', imageUrl: '/images/pexels-sora-shimazaki-5668484.jpg' },
    { id: 3, navTitle: 'timeline.title3', navNumber: '2200', contentTitle: 'timeline.firm', contentText: 'timeline.paragraph', imageUrl: '/images/pexels-sora-shimazaki-5668484.jpg' },
    { id: 4, navTitle: 'timeline.title4', navNumber: '2004', contentTitle: 'timeline.firm', contentText: 'timeline.paragraph', imageUrl: '/images/pexels-sora-shimazaki-5668484.jpg' }
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