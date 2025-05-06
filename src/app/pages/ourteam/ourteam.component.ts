import { Component, OnInit, inject } from '@angular/core'; 
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Section, TeamDataService } from '../../core/services/team-data/team-data.service';


@Component({
  selector: 'app-ourteam',
 
  standalone: true, 
  imports: [TranslatePipe],
  templateUrl: './ourteam.component.html',
  styleUrl: './ourteam.component.css'
})
export class OurteamComponent implements OnInit {


  private router = inject(Router);
  private teamDataService = inject(TeamDataService); 

  public teamMembers: Section[] = []; 

  ngOnInit(): void {
    this.teamMembers = this.teamDataService.getTeamMembers();
    console.log('Team members loaded from service:', this.teamMembers); // للتحقق
  }

  goToDetails(memberId: number): void {
    this.router.navigate(['/team-details', memberId]);
    console.log('Navigating to details for member ID:', memberId);
  }


  scrollToContent(event: MouseEvent): void {
    event.preventDefault(); 
    const contentArea = document.getElementById('content-area');
    if (contentArea) {
      contentArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}