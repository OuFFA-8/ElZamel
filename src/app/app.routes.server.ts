import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'team-details/:id',
    renderMode: RenderMode.Client
  },
  {
    path: 'event-details/:id',
    renderMode: RenderMode.Client
  },
  {
    path: 'service/:id',
    renderMode: RenderMode.Client
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
