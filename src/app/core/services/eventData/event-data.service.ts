import { Injectable } from '@angular/core';

export interface WorkItem {
  id: number;
  imageUrl: string;
  date: string;
  category: string;
  title: string;
  description: string;
  details1?: string;
  details2?: string;
  details3?: string;
  details4?: string;
  details5?: string;
  point1?: string;
  point2?: string;
  point3?: string;
  point4?: string;
  point5?: string;
  point6?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventDataService {

  workItems: WorkItem[] = [
    {
      id: 1,
      imageUrl: '/images/event.webp',
      date: 'event.item1.date',
      category: 'event.item1.category',
      title: 'event.item1.title',
      description: 'event.item1.description',
      details1: 'event.item1.details1',
      details2: 'event.item1.details2',
      details3: 'event.item1.details3',
    },
    {
      id: 2,
      imageUrl: '/images/black-white-view-theatre.webp',
      date: 'event.item2.date',
      category: 'event.item2.category',
      title: 'event.item2.title',
      description: 'event.item2.description',
      details1: 'event.item2.details1',
      details2: 'event.item2.details2',
      point1: 'event.item2.point1',
      point2: 'event.item2.point2',
      point3: 'event.item2.point3',
      point4: 'event.item2.point4',
      point5: 'event.item2.point5'
    },
    {
      id: 3,
      imageUrl: '/images/event.webp',
      date: 'event.item3.date',
      category: 'event.item3.category',
      title: 'event.item3.title',
      description: 'event.item3.description',
      details1: 'event.item3.details1',
      details2: 'event.item3.details2',
      point1: 'event.item3.point1',
      point2: 'event.item3.point2',
      point3: 'event.item3.point3',
      point4: 'event.item3.point4',
      point5: 'event.item3.point5',
      point6: 'event.item3.point6',
      details3: 'event.item3.details3',
      details4: 'event.item3.details4',
      details5: 'event.item3.details5', 

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