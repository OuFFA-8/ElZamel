import { Injectable } from '@angular/core';

export interface WorkItem { 
  id: number;             
  imageUrl: string;
  date: string;
  category: string;
  title: string;
  description: string;
  details?: string;        
}

@Injectable({
  providedIn: 'root'
})
export class EventDataService {

  workItems: WorkItem[] = [ 
    {
      id: 1, 
      imageUrl:'/images/event.png',
      date: 'event.item1.date',
      category: 'event.item1.category',
      title: 'event.item1.title',
      description: 'event.item1.description',
      details: 'Detailed information about work item 1 goes here...' // مثال للتفاصيل
    },
    {
      id: 2, 
      imageUrl: '/images/black-white-view-theatre.jpg',
      date: 'event.item2.date',
      category: 'event.item2.category',
      title: 'event.item2.title',
      description: 'event.item2.description',
      details: 'Detailed information about work item 2 goes here...' // مثال للتفاصيل
    },
    {
      id: 3,
      imageUrl: '/images/event.png',
      date: 'event.item3.date',
      category: 'event.item3.category',
      title: 'event.item3.title',
      description: 'event.item3.description',
      details: 'Detailed information about work item 3 goes here...' // مثال للتفاصيل
    },
  ];

  constructor() { }

  getEvents(): WorkItem[] { 
    return this.workItems;
  }

 
  getEventById(id: number): WorkItem | undefined { 
    return this.workItems.find(item => item.id === id); 
  }

  getOtherEvents(currentEventId: number, count: number): WorkItem[] {
    const otherItems = this.workItems.filter(item => item.id !== currentEventId);
    return otherItems.slice(0, count);
  }
  
}