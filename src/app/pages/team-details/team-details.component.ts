import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { TranslatePipe } from '@ngx-translate/core';
import { Section, TeamDataService } from '../../core/services/team-data/team-data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-team-details',
  standalone: true,
  imports: [
    TranslatePipe
  ],
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit { 
  public member: Section | undefined = undefined;

  private route = inject(ActivatedRoute);
  private teamDataService = inject(TeamDataService);
  private location = inject(Location);


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idFromRoute = params.get('id');
      if (idFromRoute) {
        const memberId = +idFromRoute;
        this.member = this.teamDataService.getMemberById(memberId);

        if (!this.member) {
          console.error(`Member with ID ${memberId} not found.`);
        }
      } else {
        console.error('Route parameter "id" is missing.');
      }
    });
  }
  isLinkedInInfoVisible = false;
  isContactInfoVisible = false;


    toggleInfo(type: 'linkedin' | 'contact'): void {
    if (type === 'linkedin') {
      this.isLinkedInInfoVisible = !this.isLinkedInInfoVisible;
      // اختيارى: إغلاق المعلومات الأخرى عند فتح واحدة
      if (this.isLinkedInInfoVisible) {
        this.isContactInfoVisible = false;
      }
    } else if (type === 'contact') {
      this.isContactInfoVisible = !this.isContactInfoVisible;
      // اختيارى: إغلاق المعلومات الأخرى عند فتح واحدة
      if (this.isContactInfoVisible) {
        this.isLinkedInInfoVisible = false;
      }
    }
  }


}