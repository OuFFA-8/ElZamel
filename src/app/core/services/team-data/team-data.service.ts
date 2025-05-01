import { Injectable } from '@angular/core';

export interface Section {
  id: number;
  Title: string;
  Text: string;
  imageUrl: string;
  contentTitle: string;
  contentText: string;

}

@Injectable({
  providedIn: 'root'
})
export class TeamDataService {


  private teamSections: Section[] = [
    { id: 1, Title: 'team.titles.1', Text: 'team.subtitle.1', contentTitle: 'team.bio_title.1', contentText: 'team.bio_text.1', imageUrl: '/images/1.jpg' },
    { id: 2, Title: 'team.titles.2', Text: 'team.subtitle.2', contentTitle: 'team.bio_title.2', contentText: 'team.bio_text.2', imageUrl: '/images/2.jpg' },
    { id: 3, Title: 'team.titles.3', Text: 'team.subtitle.3', contentTitle: 'team.bio_title.3', contentText: 'team.bio_text.3', imageUrl: '/images/3.jpg' },
    { id: 4, Title: 'team.titles.4', Text: 'team.subtitle.4', contentTitle: 'team.bio_title.4', contentText: 'team.bio_text.4', imageUrl: '/images/4.jpg' },
    { id: 5, Title: 'team.titles.5', Text: 'team.subtitle.5', contentTitle: 'team.bio_title.5', contentText: 'team.bio_text.5', imageUrl: '/images/5.jpg' },
    { id: 6, Title: 'team.titles.6', Text: 'team.subtitle.6', contentTitle: 'team.bio_title.6', contentText: 'team.bio_text.6', imageUrl: '/images/6.jpg' },
    { id: 7, Title: 'team.titles.7', Text: 'team.subtitle.7', contentTitle: 'team.bio_title.7', contentText: 'team.bio_text.7', imageUrl: '/images/7.jpg' },
    { id: 8, Title: 'team.titles.8', Text: 'team.subtitle.8', contentTitle: 'team.bio_title.8', contentText: 'team.bio_text.8', imageUrl: '/images/8.jpg' },
    { id: 9, Title: 'team.titles.9', Text: 'team.subtitle.9', contentTitle: 'team.bio_title.9', contentText: 'team.bio_text.9', imageUrl: '/images/9.jpg' },
    { id: 10, Title: 'team.titles.10', Text: 'team.subtitle.10', contentTitle: 'team.bio_title.10', contentText: 'team.bio_text.10', imageUrl: '/images/10.jpg' },
    { id: 11, Title: 'team.titles.11', Text: 'team.subtitle.11', contentTitle: 'team.bio_title.11', contentText: 'team.bio_text.11', imageUrl: '/images/11.jpg' },
    { id: 12, Title: 'team.titles.12', Text: 'team.subtitle.12', contentTitle: 'team.bio_title.12', contentText: 'team.bio_text.12', imageUrl: '/images/12.jpg' },
    { id: 13, Title: 'team.titles.13', Text: 'team.subtitle.13', contentTitle: 'team.bio_title.13', contentText: 'team.bio_text.13', imageUrl: '/images/13.jpg' },
    { id: 14, Title: 'team.titles.14', Text: 'team.subtitle.14', contentTitle: 'team.bio_title.14', contentText: 'team.bio_text.14', imageUrl: '/images/14.jpg' },
    { id: 15, Title: 'team.titles.15', Text: 'team.subtitle.15', contentTitle: 'team.bio_title.15', contentText: 'team.bio_text.15', imageUrl: '/images/15.jpg' },
    { id: 16, Title: 'team.titles.16', Text: 'team.subtitle.16', contentTitle: 'team.bio_title.16', contentText: 'team.bio_text.16', imageUrl: '/images/4.jpg' },
    { id: 17, Title: 'team.titles.17', Text: 'team.subtitle.17', contentTitle: 'team.bio_title.17', contentText: 'team.bio_text.17', imageUrl: '/images/17.jpg' },
    { id: 18, Title: 'team.titles.18', Text: 'team.subtitle.18', contentTitle: 'team.bio_title.18', contentText: 'team.bio_text.18', imageUrl: '/images/4.jpg' },
    { id: 19, Title: 'team.titles.19', Text: 'team.subtitle.19', contentTitle: 'team.bio_title.19', contentText: 'team.bio_text.19', imageUrl: '/images/19.jpg' },
    { id: 20, Title: 'team.titles.20', Text: 'team.subtitle.20', contentTitle: 'team.bio_title.20', contentText: 'team.bio_text.20', imageUrl: '/images/20.jpg' },
    { id: 21, Title: 'team.titles.21', Text: 'team.subtitle.21', contentTitle: 'team.bio_title.21', contentText: 'team.bio_text.21', imageUrl: '/images/21.jpg' },
    { id: 22, Title: 'team.titles.22', Text: 'team.subtitle.22', contentTitle: 'team.bio_title.22', contentText: 'team.bio_text.22', imageUrl: '/images/22.jpg' },
    { id: 23, Title: 'team.titles.23', Text: 'team.subtitle.23', contentTitle: 'team.bio_title.23', contentText: 'team.bio_text.23', imageUrl: '/images/4.jpg' },
    { id: 24, Title: 'team.titles.24', Text: 'team.subtitle.24', contentTitle: 'team.bio_title.24', contentText: 'team.bio_text.24', imageUrl: '/images/24.jpg' },
    { id: 25, Title: 'team.titles.25', Text: 'team.subtitle.25', contentTitle: 'team.bio_title.25', contentText: 'team.bio_text.25', imageUrl: '/images/25.jpg' }
  ];

  constructor() { }

  getTeamMembers(): Section[] {
    return this.teamSections;
  }

  getMemberById(id: number): Section | undefined {
    const member = this.teamSections.find(section => section.id === id);
    return member;
  }
}