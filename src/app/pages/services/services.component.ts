import { Component, Input, Signal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiceItem, ServicesDataService } from '../../core/services/services/services-data.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {


  public services: Signal<ServiceItem[]>; 

  @Input() sectionSubtitle: string = "AREAS OF PRACTICE";
  @Input() sectionTitle: string = "PROFESSIONAL SERVICES";
  @Input() sectionDescription: string = "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.";

  constructor(private servicesDataService: ServicesDataService) {
    this.services = this.servicesDataService.services;
    console.log('Services Signal Value in Constructor:', this.services()); // اطبع القيمة هنا
  }

}