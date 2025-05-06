import { Injectable, signal, computed } from '@angular/core';

export interface ServiceItem {
  id: number;
  iconClass: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;
  image?: string;
  bannerImageUrl?: string;
  contentSection1?: string;
  contentSection1Title: string;
  contentSection1Body: string;
  contentSection2Body: string;
  image1?: string;
  image2?: string;
  image3?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServicesDataService {

  private servicesDataSource = signal<ServiceItem[]>([

    {
      id: 1, iconClass: 'fas fa-landmark',
      title: 'services.section1.title', //dddddddddddddd
      shortDescription: 'services.section1.span',
      bannerImageUrl: '/images/black-white-view-theatre.jpg',
      contentSection1Title: 'services.section1.title2',
      contentSection1Body: 'services.section1.paragraph1',
      contentSection2Body: 'services.section1.paragraph2',
      image1: '/images/black-white-view-theatre.jpg',
      image2: '/images/black-white-view-theatre.jpg',
      image3: '/images/black-white-view-theatre.jpg'
    },
    {
      id: 2, iconClass: 'fas fa-pen-fancy',
      title: 'services.section2.title',
      shortDescription: 'services.section2.span',
      bannerImageUrl: '/images/black-white-view-theatre.jpg',
      contentSection1Title: 'services.section2.title2',
      contentSection1Body: 'services.section2.paragraph1',
      contentSection2Body: 'services.section2.paragraph2',
      image1: '/images/black-white-view-theatre.jpg',
      image2: '/images/black-white-view-theatre.jpg',
      image3: '/images/black-white-view-theatre.jpg'
    },
    {
      id: 3, iconClass: 'fas fa-balance-scale',
      title: 'services.section3.title',
      shortDescription: 'services.section3.span',
      bannerImageUrl: '/images/black-white-view-theatre.jpg',
      contentSection1Title: 'services.section3.title2',
      contentSection1Body: 'services.section3.paragraph1',
      contentSection2Body: 'services.section3.paragraph2',
      image1: '/images/black-white-view-theatre.jpg',
      image2: '/images/black-white-view-theatre.jpg',
      image3: '/images/black-white-view-theatre.jpg'
    },
    {
      id: 4, iconClass: 'fas fa-user-injured',
      title: 'services.section4.title',
      shortDescription: 'services.section4.span',
      bannerImageUrl: '/images/black-white-view-theatre.jpg',
      contentSection1Title: 'services.section4.title2',
      contentSection1Body: 'services.section4.paragraph1',
      contentSection2Body: 'services.section4.paragraph2',
      image1: '/images/black-white-view-theatre.jpg',
      image2: '/images/black-white-view-theatre.jpg',
      image3: '/images/black-white-view-theatre.jpg'
    },
    {
      id: 5, iconClass: 'fas fa-certificate',
      title: 'services.section5.title',
      shortDescription: 'services.section5.span',
      bannerImageUrl: '/images/black-white-view-theatre.jpg',
      contentSection1Title: 'services.section5.title2',
      contentSection1Body: 'services.section5.paragraph1',
      contentSection2Body: 'services.section5.paragraph2',
      image1: '/images/black-white-view-theatre.jpg',
      image2: '/images/black-white-view-theatre.jpg',
      image3: '/images/black-white-view-theatre.jpg'
    },
    {
      id: 6, iconClass: 'fas fa-university',
      title: 'services.section6.title',
      shortDescription: 'services.section6.span',
      bannerImageUrl: '/images/black-white-view-theatre.jpg',
      contentSection1Title: 'services.section6.title2',
      contentSection1Body: 'services.section6.paragraph1',
      contentSection2Body: 'services.section6.paragraph2',
      image1: '/images/black-white-view-theatre.jpg',
      image2: '/images/black-white-view-theatre.jpg',
      image3: '/images/black-white-view-theatre.jpg'
    },
    {
      id: 7, iconClass: 'fas fa-book-open',
      title: 'services.section7.title',
      shortDescription: 'services.section7.span',
      bannerImageUrl: '/images/black-white-view-theatre.jpg',
      contentSection1Title: 'services.section7.title2',
      contentSection1Body: 'services.section7.paragraph1',
      contentSection2Body: 'services.section7.paragraph2',
      image1: '/images/black-white-view-theatre.jpg',
      image2: '/images/black-white-view-theatre.jpg',
      image3: '/images/black-white-view-theatre.jpg'
    },
    {
      id: 8, iconClass: 'fas fa-handshake',
      title: 'services.section8.title',
      shortDescription: 'services.section8.span',
      bannerImageUrl: '/images/black-white-view-theatre.jpg',
      contentSection1Title: 'services.section8.title2',
      contentSection1Body: 'services.section8.paragraph1',
      contentSection2Body: 'services.section8.paragraph2',
      image1: '/images/black-white-view-theatre.jpg',
      image2: '/images/black-white-view-theatre.jpg',
      image3: '/images/black-white-view-theatre.jpg'
    },

  ]);

  public services = this.servicesDataSource.asReadonly();

  constructor() { }

  getServiceById(id: number): ServiceItem | undefined {
    return this.servicesDataSource().find(service => service.id === id);
  }
}