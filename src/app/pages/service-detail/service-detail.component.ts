import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { ServicesDataService, ServiceItem } from  '../../core/services/services/services-data.service'; 
import { SafeUrlPipe } from '../../shared/pipes/safe-url.pipe';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router); 
  private servicesDataService = inject(ServicesDataService);

  service = signal<ServiceItem | undefined>(undefined);

  ngOnInit(): void {
    const serviceIdParam = this.route.snapshot.paramMap.get('id');

    if (serviceIdParam) {
      const serviceId = +serviceIdParam; 
      if (!isNaN(serviceId)) {
        const foundService = this.servicesDataService.getServiceById(serviceId);
        if (foundService) {
          this.service.set(foundService); 
        } else {
          console.error(`Service with ID ${serviceId} not found.`);
        }
      } else {
         console.error(`Invalid service ID parameter: ${serviceIdParam}`);
      }
    } else {
      console.error('Service ID parameter not found in route.');
    }
  }

  goBack(): void {
    this.router.navigate(['/services']); 
  }

  scrollToContent(event: MouseEvent): void {
    event.preventDefault(); 
    const contentArea = document.getElementById('content-area');
    if (contentArea) {
      contentArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}