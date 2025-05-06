import { Component, Input, Signal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiceItem, ServicesDataService } from '../../core/services/services/services-data.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule , TranslatePipe],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {


  public services: Signal<ServiceItem[]>; 

  @Input() sectionSubtitle: string = "services.main.span";
  @Input() sectionTitle: string = "services.main.title";
  @Input() sectionDescription: string = "services.main.paragraph";

  constructor(private servicesDataService: ServicesDataService) {
    this.services = this.servicesDataService.services;
    console.log('Services Signal Value in Constructor:', this.services()); 
  }

  scrollToContent(event: MouseEvent): void {
    event.preventDefault(); 
    const contentArea = document.getElementById('content-area');
    if (contentArea) {
      contentArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}