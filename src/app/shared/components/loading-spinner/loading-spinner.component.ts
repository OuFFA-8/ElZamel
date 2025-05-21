// src/app/shared/components/loading-spinner/loading-spinner.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // مهم إذا كنت ستستخدم أي Directives

@Component({
  selector: 'app-loading-spinner',
  standalone: true, // <<< أضف هذا
  imports: [CommonModule], // <<< أضف هذا
  template: `
    <div
      class="fixed inset-0 bg-gray-900 bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-[9999]"
      aria-modal="true"
      role="dialog"
      aria-labelledby="loading-message"
    >
      <div class="w-16 h-16">
        <div
          class="animate-spin rounded-full h-full w-full border-4 border-t-sky-500 border-r-sky-500 border-b-sky-500/30 border-l-sky-500/30"
          role="status"
        >
          <span class="sr-only">Loading...</span>
        </div>
        <p id="loading-message" class="text-white text-center mt-3 text-lg">جاري التحميل...</p>
      </div>
    </div>
  `,
})
export class LoadingSpinnerComponent {
  constructor() { }
}


