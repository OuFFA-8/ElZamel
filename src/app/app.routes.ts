import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { OurteamComponent } from './pages/ourteam/ourteam.component';
import { EventsComponent } from './pages/events/events.component';
import { BranchesComponent } from './pages/branches/branches.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { TeamDetailsComponent } from './pages/team-details/team-details.component';

export const routes: Routes = [
    {path:"" , redirectTo:"home" ,pathMatch:"full"},
    {path:"home" , component:HomeComponent , title:"الزامل والخرّاشي - للمحاماه والاستشارات القانونية"},
    {path:"services" , component:ServicesComponent , title:"الزامل والخرّاشي - للمحاماه والاستشارات القانونية"},
    {path:"ourteam" , component:OurteamComponent , title:"الزامل والخرّاشي - للمحاماه والاستشارات القانونية"},
    {path:"team-details/:id" , component:TeamDetailsComponent , title:"الزامل والخرّاشي - للمحاماه والاستشارات القانونية"},
    {path:"events" , component:EventsComponent , title:"الزامل والخرّاشي - للمحاماه والاستشارات القانونية"},
    {path:"branches" , component:BranchesComponent , title:"الزامل والخرّاشي - للمحاماه والاستشارات القانونية"},
    {path:"contact" , component:ContactComponent , title:"الزامل والخرّاشي - للمحاماه والاستشارات القانونية"},
    {path:"**" , component:NotfoundComponent , title:"الزامل والخرّاشي - للمحاماه والاستشارات القانونية"},
];
