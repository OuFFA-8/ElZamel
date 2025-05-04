import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    {
        path: 'home',
        loadComponent: () =>
            import('./pages/home/home.component').then(m => m.HomeComponent),
        title: 'الزامل والخرّاشي - للمحاماه والاستشارات القانونية'
    },
    {
        path: 'services',
        loadComponent: () =>
            import('./pages/services/services.component').then(m => m.ServicesComponent),
        title: 'الزامل والخرّاشي - للمحاماه والاستشارات القانونية'
    },
    {
        path: 'ourteam',
        loadComponent: () =>
            import('./pages/ourteam/ourteam.component').then(m => m.OurteamComponent),
        title: 'الزامل والخرّاشي - للمحاماه والاستشارات القانونية'
    },
    {
        path: 'team-details/:id',
        loadComponent: () =>
            import('./pages/team-details/team-details.component').then(m => m.TeamDetailsComponent),
        title: 'الزامل والخرّاشي - للمحاماه والاستشارات القانونية'
    },
    {
        path: 'events',
        loadComponent: () =>
            import('./pages/events/events.component').then(m => m.EventsComponent),
        title: 'الزامل والخرّاشي - للمحاماه والاستشارات القانونية'
    },
    {
        path: 'branches',
        loadComponent: () =>
            import('./pages/branches/branches.component').then(m => m.BranchesComponent),
        title: 'الزامل والخرّاشي - للمحاماه والاستشارات القانونية'
    },
    {
        path: 'contact',
        loadComponent: () =>
            import('./pages/contact/contact.component').then(m => m.ContactComponent),
        title: 'الزامل والخرّاشي - للمحاماه والاستشارات القانونية'
    },
    {
        path: 'event-details/:id',  
        loadComponent: () =>
            import('./pages/event-details/event-details.component').then(m => m.EventDetailsComponent),
        title: 'الزامل والخرّاشي - للمحاماه والاستشارات القانونية'
    },
    {
        path: 'service/:id',  
        loadComponent: () =>
            import('./pages/service-detail/service-detail.component').then(m => m.ServiceDetailComponent),
        title: 'الزامل والخرّاشي - للمحاماه والاستشارات القانونية'
    },
    {
        path: '**',
        loadComponent: () =>
            import('./pages/notfound/notfound.component').then(m => m.NotfoundComponent),
        title: 'الزامل والخرّاشي - للمحاماه والاستشارات القانونية'
    },
];
