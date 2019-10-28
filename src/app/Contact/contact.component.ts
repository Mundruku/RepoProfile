import { Component, Inject } from "@angular/core";
import {  TOAST } from '../common/toastr.service';
import { Router } from '@angular/router';



@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent{

    constructor(private route:Router, @Inject(TOAST) private toastr){

    }

  message(){
    this.toastr.success("Message Sent. Thanks")
    this.route.navigate(['/home'])
  }
}
