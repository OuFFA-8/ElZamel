import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { EventDataService, WorkItem } from '../../core/services/eventData/event-data.service';
import { Router, RouterLink } from '@angular/router';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-events',
  imports: [ TranslatePipe ,CommonModule],
  templateUrl: './events.component.html',
  standalone: true,
  styleUrl: './events.component.css',
  animations: [
    trigger('listAnimation', [ // أنيميشن للحاوية الرئيسية للقائمة
      transition(':enter', [ // عند دخول الحاوية (أول تحميل)
        // استهداف العناصر التي ستحتوي على أنيميشن 'itemAnimation'
        query('@itemAnimation', [
          stagger(100, [ // تطبيق الأنيميشن التالي بتأخير 100ms بين كل عنصر
            animate('300ms ease-out')
          ])
        ], { optional: true }) // optional لتجنب الخطأ إذا كانت القائمة فارغة
      ])
    ]),
    trigger('itemAnimation', [ // أنيميشن لكل عنصر في القائمة
      transition(':enter', [ // عند دخول العنصر
        style({ opacity: 0, transform: 'translateY(20px)' }), // الحالة الأولية (شفاف ومزاح للأسفل)
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })) // الحركة للحالة النهائية
      ])
      // يمكنك إضافة :leave transition هنا إذا أردت تأثير عند الحذف
    ])
  ]
})
export class EventsComponent {

  private eventService = inject(EventDataService);
  private router = inject(Router); 
  workItems: WorkItem[] = this.eventService.getEvents(); 
  constructor() { }

  navigateToDetails(id: number): void {
    if (id === undefined || id === null) {
      console.error('Cannot navigate to details: Invalid ID provided.');
      return;
    }
    this.router.navigate(['/event-details', id]);
  }

}
