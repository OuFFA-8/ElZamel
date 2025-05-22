import { Injectable } from '@angular/core';

export interface Section {
  id: number;
  Title: string;
  Text: string;
  imageUrl: string;
  contentTitle: string;
  contentText: string;
  email:string;
  phone:string;
}

@Injectable({
  providedIn: 'root'
})
export class TeamDataService {


  private teamSections: Section[] = [
    { id: 1, Title: 'team.titles.1', Text: 'team.subtitle.1' ,email:'mohd@zk-legal.com', phone:'0505466405'  , contentTitle: 'team.bio_title.1', contentText: 'team.bio_text.1', imageUrl: '/images/1.jpg' },
    { id: 2, Title: 'team.titles.2', Text: 'team.subtitle.2' ,email:'o.alzamil@zk-legal.com ', phone:'0555466405'  , contentTitle: 'team.bio_title.2', contentText: 'team.bio_text.2', imageUrl: '/images/2.jpg' },
    { id: 3, Title: 'team.titles.3', Text: 'team.subtitle.3' ,email:'m.al-moshigeh@zk-legal.com', phone:'0503111549'  , contentTitle: 'team.bio_title.3', contentText: 'team.bio_text.3', imageUrl: '/images/3.jpg' },
    { id: 4, Title: 'team.titles.4', Text: 'team.subtitle.4' ,email:'m.allahim@zk-legal.com', phone:'0533995777'  , contentTitle: 'team.bio_title.4', contentText: 'team.bio_text.4', imageUrl: '/images/4.jpg' },
    { id: 5, Title: 'team.titles.5', Text: 'team.subtitle.5' ,email:'m.ajabna@zk-legal.com', phone:'0564770199'  , contentTitle: 'team.bio_title.5', contentText: 'team.bio_text.5', imageUrl: '/images/5.jpg' },
    { id: 6, Title: 'team.titles.6', Text: 'team.subtitle.6' ,email:'t.ashraf@zk-legal.com', phone:'0598158486'  , contentTitle: 'team.bio_title.6', contentText: 'team.bio_text.6', imageUrl: '/images/6.jpg' },
    { id: 7, Title: 'team.titles.7', Text: 'team.subtitle.7' ,email:'siaraj@zk-legal.com', phone:'0590602555'  , contentTitle: 'team.bio_title.7', contentText: 'team.bio_text.7', imageUrl: '/images/7.jpg' },
    { id: 8, Title: 'team.titles.8', Text: 'team.subtitle.8' ,email:'f.shallali@zk-legal.com', phone:'0554296449'  , contentTitle: 'team.bio_title.8', contentText: 'team.bio_text.8', imageUrl: '/images/8.jpg' },
    { id: 9, Title: 'team.titles.9', Text: 'team.subtitle.9' ,email:'k.alkadi@zk-legal.com', phone:'0565014477'  , contentTitle: 'team.bio_title.9', contentText: 'team.bio_text.9', imageUrl: '/images/9.jpg' },
    { id: 10, Title: 'team.titles.10', Text: 'team.subtitle.10' ,email:'m.dawoud@zk-legal.com', phone:'0538626167'  , contentTitle: 'team.bio_title.10', contentText: 'team.bio_text.10', imageUrl: '/images/10.jpg' },
    { id: 11, Title: 'team.titles.11', Text: 'team.subtitle.11' ,email:'a.alabdeli@zk-legal.com', phone:'0542682211'  , contentTitle: 'team.bio_title.11', contentText: 'team.bio_text.11', imageUrl: '/images/11.jpg' },
    { id: 12, Title: 'team.titles.12', Text: 'team.subtitle.12' ,email:'m.altuwayjiri@zk-legal.com', phone:'0552232892'  , contentTitle: 'team.bio_title.12', contentText: 'team.bio_text.12', imageUrl: '/images/12.jpg' },
    { id: 13, Title: 'team.titles.13', Text: 'team.subtitle.13' ,email:'a.almsnd@zk-legal.com', phone:'0566130003'  , contentTitle: 'team.bio_title.13', contentText: 'team.bio_text.13', imageUrl: '/images/13.jpg' },
    { id: 14, Title: 'team.titles.14', Text: 'team.subtitle.14' ,email:'a.aljamil@zk-legal.com', phone:'0554181190'  , contentTitle: 'team.bio_title.14', contentText: 'team.bio_text.14', imageUrl: '/images/14.jpg' },
    { id: 15, Title: 'team.titles.15', Text: 'team.subtitle.15' ,email:'k.alali@zk-legal.com', phone:'0503250036'  , contentTitle: 'team.bio_title.15', contentText: 'team.bio_text.15', imageUrl: '/images/15.jpg' },
    { id: 16, Title: 'team.titles.16', Text: 'team.subtitle.16' ,email:'k.alzamil@zk-legal.com', phone:'0568282888'  , contentTitle: 'team.bio_title.16', contentText: 'team.bio_text.16', imageUrl: '/images/4.jpg' },
    { id: 17, Title: 'team.titles.17', Text: 'team.subtitle.17' ,email:'s.alduraibi@zk-legal.com', phone:'0555228059'  , contentTitle: 'team.bio_title.17', contentText: 'team.bio_text.17', imageUrl: '/images/17.jpg' },
    { id: 18, Title: 'team.titles.18', Text: 'team.subtitle.18' ,email:'f.alaqil@zk-legal.com', phone:'0594994771'  , contentTitle: 'team.bio_title.18', contentText: 'team.bio_text.18', imageUrl: '/images/4.jpg' },
    { id: 19, Title: 'team.titles.19', Text: 'team.subtitle.19' ,email:'a.allahim@zk-legal.com', phone:'0550711777'  , contentTitle: 'team.bio_title.19', contentText: 'team.bio_text.19', imageUrl: '/images/19.jpg' },
    { id: 20, Title: 'team.titles.20', Text: 'team.subtitle.20' ,email:'a.alkadi@zk-legal.com', phone:'0542590408'  , contentTitle: 'team.bio_title.20', contentText: 'team.bio_text.20', imageUrl: '/images/20.jpg' },
    { id: 21, Title: 'team.titles.21', Text: 'team.subtitle.21' ,email:'a.sharwani@zk-legal.com', phone:'0509160793'  , contentTitle: 'team.bio_title.21', contentText: 'team.bio_text.21', imageUrl: '/images/21.jpg' },
    { id: 22, Title: 'team.titles.22', Text: 'team.subtitle.22' ,email:'f.alajlan@zk-legal.com', phone:'0555455991'  , contentTitle: 'team.bio_title.22', contentText: 'team.bio_text.22', imageUrl: '/images/22.jpg' },
    { id: 23, Title: 'team.titles.23', Text: 'team.subtitle.23' ,email:'a.almohanna@zk-legal.com', phone:'0503555559'  , contentTitle: 'team.bio_title.23', contentText: 'team.bio_text.23', imageUrl: '/images/4.jpg' },
    { id: 24, Title: 'team.titles.24', Text: 'team.subtitle.24' ,email:'a.aloraidh@zk-legal.com', phone:'0534050560'  , contentTitle: 'team.bio_title.24', contentText: 'team.bio_text.24', imageUrl: '/images/24.jpg' },
    { id: 25, Title: 'team.titles.25', Text: 'team.subtitle.25' ,email:'s.alsulaim@zk-legal.com', phone:'0500993393'  , contentTitle: 'team.bio_title.25', contentText: 'team.bio_text.25', imageUrl: '/images/25.jpg' }
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