import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface WorkItem {
  imageUrl: string;
  date: string;
  category: string;
  title: string;
  description: string;
  linkUrl?: string;
}

@Component({
  selector: 'app-events',
  imports: [ TranslatePipe],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {


  workItems: WorkItem[] = [
    {
      imageUrl:'/images/event.png', 
      date: 'event.item1.date',
      category: 'event.item1.category',
      title: 'event.item1.title',
      description: 'event.item1.description' 
    },
    {
      imageUrl: '/images/event.png', 
      date: 'event.item2.date',
      category: 'event.item2.category',
      title: 'event.item2.title',
      description: 'event.item2.description',
 
    },
    {
      imageUrl: '/images/event.png',
      date: 'event.item3.date',
      category: 'event.item3.category',
      title: 'event.item3.title',
      description: 'event.item3.description'
    },

  ];


}
