import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar.component';
import { HomeComponent } from './Home/home.component';
import { RouterModule } from '@angular/router';
import { appRoute } from './route';
import { AboutComponent } from './About/about.component';
import { ServiceComponent } from './Services/service.component';
import { workComponent } from './Work/work.component';
import { ContactComponent } from './Contact/contact.component';
import { TOAST } from './common/toastr.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
let toastr:any=window['toastr']
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    workComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [
   {provide: TOAST, useValue: toastr},
   FormsModule,
   ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
