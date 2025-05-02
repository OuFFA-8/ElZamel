import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { EventDataService , WorkItem } from '../../core/services/eventData/event-data.service';
import { TranslatePipe } from '@ngx-translate/core';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [ CommonModule , TranslatePipe, RouterLink ],
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
  animations: [
    trigger('contentFadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }), // يبدأ شفاف ومزاح للأسفل
        // تأخير بسيط (100ms) قبل بدء الحركة
        animate('500ms 100ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
     trigger('relatedFadeSlide', [ // أنيميشن منفصل لقسم related
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        // تأخير أطول (400ms) ليظهر بعد المحتوى الرئيسي
        animate('500ms 400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class EventDetailsComponent {

  private route = inject(ActivatedRoute);
  private eventService = inject(EventDataService);
  private router = inject(Router);

  readonly workItem = signal<WorkItem | undefined>(undefined);
  readonly errorMessage = signal<string | null>(null);
  readonly relatedItems = signal<WorkItem[]>([]);

  private relatedItemsCount = 3;

  constructor() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');

      this.workItem.set(undefined);
      this.relatedItems.set([]);
      this.errorMessage.set(null);

      if (!idParam) {
        this.errorMessage.set('No ID provided in the URL.');
        return;
      }

      const eventId = Number(idParam);

      if (isNaN(eventId)) {
        this.errorMessage.set(`Invalid ID provided: ${idParam}`);
        return;
      }

      const foundItem = this.eventService.getEventById(eventId);

      if (foundItem) {
        this.workItem.set(foundItem);
        this.relatedItems.set(this.eventService.getOtherEvents(eventId, this.relatedItemsCount));
      } else {
        this.errorMessage.set(`Work item with ID ${eventId} not found.`);
        // Optionally load default related items even if main item not found
        // this.relatedItems.set(this.eventService.getOtherEvents(-1, this.relatedItemsCount));
      }
    });
  }

  navigateToRelated(id: number): void {
    if (id === undefined || id === null) {
      console.error('Cannot navigate: Invalid related item ID.');
      return;
    }
    this.router.navigate(['/event-details', id]);
  }
}