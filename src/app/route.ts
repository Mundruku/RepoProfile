import { HomeComponent } from './Home/home.component';
import {Routes} from '@angular/router'
import { AboutComponent } from './About/about.component';
import { ServiceComponent } from './Services/service.component';
import { workComponent } from './Work/work.component';
import { ContactComponent } from './Contact/contact.component';
export const appRoute:Routes=[
{path: 'home', component: HomeComponent},
{path: "", redirectTo: '/home', pathMatch: 'full'},
{path: 'home/About', component:AboutComponent},
{path: 'home/services', component:ServiceComponent},
{path: 'home/portfolio', component:workComponent},

{path: 'home/contact', component:ContactComponent}
]
