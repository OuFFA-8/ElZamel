import { Component, AfterViewInit, ElementRef, ViewChild, inject, signal, PLATFORM_ID, Inject, ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

declare let L: any;

interface Branch {
  id: number;
  name: string;
  lat: number;
  lng: number;
  address: string;
  Box?: string;
  tel?: number | string;
  phone?: number | string;
  number?: number | string;
  open?: string;
  email?: string;
}

@Component({
  selector: 'app-branch-map',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './branch-map.component.html',
  styleUrls: ['./branch-map.component.css']
})
export class BranchMapComponent implements AfterViewInit {

  @ViewChild('mapContainerDiv') private mapContainer!: ElementRef<HTMLDivElement>;

  readonly branches = signal<Branch[]>([
    { id: 1, name: 'الفرع الرئيسي - الرياض', lat: 24.692264, lng: 46.719487, address: 'طريق مكة المكرمة ، جسر الخليج' , Box: 'ص.ب: 28330 الرياض 11437', tel: '0114733303', number: '920009756', open: 'Sat-Thur 8:30am- 5pm', email: 'zk@zk-legal.com'},
    { id: 2, name: 'فرع الشرقية : الخبر​', lat: 26.340197, lng: 50.198730, address: 'طريق الملك فهد ، برج NSH', Box: 'ص.ب 12345 الخبر 31952', tel: '0138XXXXXX', number: '9200XXXXX', open: 'Sat-Thur 8:00am- 4:30pm', email: 'khobar@zk-legal.com' },
    { id: 3, name: 'فرع الغربية : جدة​', lat: 21.602424, lng: 39.108295, address: 'برج ذا هيد كوارتز بزنس بارك', Box: 'ص.ب 67890 جدة 21411', tel: '0126XXXXXX', number: '9200XXXXX', open: 'Sun-Thur 9:00am- 6pm', email: 'jeddah@zk-legal.com' }
  ]);

  private L: any;
  private map: any;
  private markers: Map<number, any> = new Map();
  readonly expandedBranchId = signal<number | null>(null);

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef
  ) {}

  async ngAfterViewInit(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      try {
        this.L = await import('leaflet');
        if (this.mapContainer?.nativeElement) {
          this.initializeMap();
        } else {
          console.error('Map container element not found in AfterViewInit.');
        }
      } catch (err) {
        console.error('Error loading Leaflet:', err);
      }
    } else {
      console.log('Skipping map initialization on the server.');
    }
  }

  private initializeMap(): void {
    if (!this.map && this.L && this.mapContainer?.nativeElement) {
      try {
        const options = {
          layers: [
            this.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              maxZoom: 18,
              minZoom: 3,
              attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            })
          ],
          zoom: 6,
          center: this.L.latLng(24.5, 45)
        };
        this.map = this.L.map(this.mapContainer.nativeElement, options);
        this.addMarkers();
        this.cdr.detectChanges();
      } catch (error) {
        console.error('Error during map initialization:', error);
      }
    }
  }

  private addMarkers(): void {
    if (!this.L || !this.map) return;
    this.markers.forEach(marker => marker.removeFrom(this.map!));
    this.markers.clear();
    const faIcon = this.L.divIcon({
      html: '<i class="fas fa-map-marker-alt fa-2x text-red-600"></i>',
      className: 'leaflet-fa-icon',
      iconSize: [24, 24],
      iconAnchor: [12, 24],
      popupAnchor: [0, -24]
    });
    this.branches().forEach(branch => {
      const popupContent = `<b>${branch.name}</b><br>${branch.address}`;
      const marker = this.L.marker([branch.lat, branch.lng], { icon: faIcon })
                       .bindPopup(popupContent);
      marker.addTo(this.map!);
      this.markers.set(branch.id, marker);
    });
  }

  toggleBranchDetails(branchId: number): void {
    console.log(`--- CLICKED Branch ID: ${branchId} ---`); // <-- بداية الحدث

    const currentExpanded = this.expandedBranchId();
    console.log(`Current expandedBranchId value BEFORE set: ${currentExpanded}`); // <-- القيمة الحالية

    let newId: number | null;
    if (currentExpanded === branchId) {
      console.log('Condition met: currentExpanded === branchId. Setting to null (closing).');
      newId = null;
      this.expandedBranchId.set(newId);
    } else {
      console.log('Condition NOT met: currentExpanded !== branchId. Setting to clicked ID (opening).');
      newId = branchId;
      this.expandedBranchId.set(newId);
    }
    // نطبع القيمة *بعد* التحديث للتأكد
    // ملاحظة: الـ signal قد لا يحدث الـ DOM فوراً، لكن قيمته الداخلية تتغير
    console.log(`New expandedBranchId value AFTER set: ${this.expandedBranchId()}`);

    // استدعاء تحريك الخريطة
    this.goToMapLocation(branchId);
    console.log(`--- End Toggle Logic for Branch ID: ${branchId} ---`);
  }
  private goToMapLocation(branchId: number): void {
    if (!this.map || !this.L) return;
    const branch = this.branches().find(b => b.id === branchId);
    const marker = this.markers.get(branchId);
    if (branch) {
      const zoomLevel = 15;
      this.map.setView(this.L.latLng(branch.lat, branch.lng), zoomLevel);
      if (marker) {
        marker.openPopup();
      }
    } else {
      console.error('Branch not found for map location:', branchId);
    }
  }
}