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
  contentSection2Title?: string;
  contentSection2Body?: string;
  contentSection3Title?: string;
  contentSection3Body?: string;
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
      id: 1, iconClass: 'fas fa-landmark', title: 'ROAD ACCIDENTS',
      shortDescription: 'Adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      bannerImageUrl: 'assets/images/banner-road-accident.jpg',
      contentSection1: 'Mauris eu nisi eget nisi imperdiet vestibulum. Nunc sodales vehicula risus. Suspendisse id mauris sodales.',
      contentSection2Title: 'PROCEDURES AND RIGHTS',
      contentSection2Body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
      contentSection3Title: 'COMPENSATION CLAIMS',
      contentSection3Body: 'Curabitur pellentesque odio magna, id malesuada arcu sodales ut. Sed sed quam ut ex bibendum commodo id id magna.',
      image1: '/images/black-white-view-theatre.jpg',
      image2: '/images/black-white-view-theatre.jpg',
      image3: '/images/black-white-view-theatre.jpg'
    },
    {
      id: 2, iconClass: 'fas fa-pen-fancy', title: 'CRIMINAL LAW',
      shortDescription: 'Dicta sunt explicabo. Nemo enim ipsam voluptatem.',
      bannerImageUrl: 'assets/images/banner-criminal-law.jpg',
      contentSection1: 'Detailed overview of criminal defense strategies and representations.',
      contentSection2Title: 'TYPES OF CASES HANDLED',
      contentSection2Body: 'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor.',
      contentSection3Title: 'YOUR LEGAL RIGHTS',
      contentSection3Body: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
      image1: '/images/black-white-view-theatre.jpg',
      image2: '/images/black-white-view-theatre.jpg',
      image3: '/images/black-white-view-theatre.jpg'
    },
    {
      id: 3, iconClass: 'fas fa-balance-scale', title: 'PROPERTY LAW',
      shortDescription: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      bannerImageUrl: 'assets/images/banner-property-law.jpg',
      contentSection1: 'Navigating the complexities of real estate transactions and disputes.',
      contentSection2Title: 'BUYING AND SELLING',
      contentSection2Body: 'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      contentSection3Title: 'LEASING AND RENTALS',
      contentSection3Body: 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.',
      image1: '/images/black-white-view-theatre.jpg',
      image2: '/images/black-white-view-theatre.jpg',
      image3: '/images/black-white-view-theatre.jpg'
    },
    // --- أكمل بنفس الطريقة لباقي الخدمات ---
    {
      id: 4, iconClass: 'fas fa-user-injured', title: 'EMPLOYMENT LAW',
      shortDescription: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      bannerImageUrl: 'assets/images/banner-employment.jpg',
      contentSection1: 'Protecting employee rights and advising employers.',
      contentSection2Title: 'BUYING AND SELLING',
      contentSection2Body: 'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      contentSection3Title: 'LEASING AND RENTALS',
      contentSection3Body: 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.',
      image1: '/images/black-white-view-theatre.jpg',
      image2: '/images/black-white-view-theatre.jpg',
      image3: '/images/black-white-view-theatre.jpg'
    },
    {
      id: 5, iconClass: 'fas fa-certificate', title: 'CIVIL RIGHTS LAW',
      shortDescription: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      bannerImageUrl: 'assets/images/banner-civil-rights.jpg',
      contentSection2Title: 'BUYING AND SELLING',
      contentSection2Body: 'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      contentSection3Title: 'LEASING AND RENTALS',
      contentSection3Body: 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.',
      image1: '/images/black-white-view-theatre.jpg',
      image2: '/images/black-white-view-theatre.jpg',
      image3: '/images/black-white-view-theatre.jpg'
    },
    {
      id: 6, iconClass: 'fas fa-university', title: 'BANK REGULATION',
      shortDescription: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      bannerImageUrl: 'assets/images/banner-bank.jpg',
      contentSection2Title: 'BUYING AND SELLING',
      contentSection2Body: 'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      contentSection3Title: 'LEASING AND RENTALS',
      contentSection3Body: 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.',
      image1: '/images/black-white-view-theatre.jpg',
      image2: '/images/black-white-view-theatre.jpg',
      image3: '/images/black-white-view-theatre.jpg'
    },
    {
      id: 7, iconClass: 'fas fa-book-open', title: 'LEGAL PROCEEDING',
      shortDescription: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      bannerImageUrl: 'assets/images/banner-legal.jpg',
      contentSection2Title: 'BUYING AND SELLING',
      contentSection2Body: 'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      contentSection3Title: 'LEASING AND RENTALS',
      contentSection3Body: 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.',
      image1: '/images/black-white-view-theatre.jpg',
      image2: '/images/black-white-view-theatre.jpg',
      image3: '/images/black-white-view-theatre.jpg'
    },
    {
      id: 8, iconClass: 'fas fa-gavel', title: 'IMMIGRATION LAW',
      shortDescription: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      bannerImageUrl: 'assets/images/banner-immigration.jpg',
      contentSection2Title: 'BUYING AND SELLING',
      contentSection2Body: 'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      contentSection3Title: 'LEASING AND RENTALS',
      contentSection3Body: 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.',
      image1: '/images/black-white-view-theatre.jpg',
      image2: '/images/black-white-view-theatre.jpg',
      image3: '/images/black-white-view-theatre.jpg'
    },
    {
      id: 9, iconClass: 'fas fa-handshake', title: 'PURCHASING LAW',
      shortDescription: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      bannerImageUrl: 'assets/images/banner-purchasing.jpg',
      contentSection2Title: 'BUYING AND SELLING',
      contentSection2Body: 'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      contentSection3Title: 'LEASING AND RENTALS',
      contentSection3Body: 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.',
      image1: '/images/black-white-view-theatre.jpg',
      image2: '/images/black-white-view-theatre.jpg',
      image3: '/images/black-white-view-theatre.jpg'
    }
  ]);

  public services = this.servicesDataSource.asReadonly();

  constructor() { }

  getServiceById(id: number): ServiceItem | undefined {
    return this.servicesDataSource().find(service => service.id === id);
  }
}